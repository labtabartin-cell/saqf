import express from "express";
import cors from "cors";
import multer from "multer";
import { randomUUID } from "node:crypto";
import { Pool } from "pg";

const app = express();
const upload = multer({ dest: "uploads/" });
const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } }) : null;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

async function initDb() {
  if (!pool) return;
  await pool.query(`CREATE TABLE IF NOT EXISTS ads (
    id UUID PRIMARY KEY, type TEXT NOT NULL, title TEXT NOT NULL, description TEXT DEFAULT '',
    price TEXT DEFAULT '', category TEXT DEFAULT '', city TEXT DEFAULT '', phone TEXT DEFAULT '',
    images JSONB DEFAULT '[]'::jsonb, created_at TIMESTAMPTZ DEFAULT NOW()
  )`);
}
app.get("/health", async (_,res)=>{try{if(pool) await pool.query("SELECT 1");res.json({ok:true,name:"saqf-api",database:!!pool})}catch{res.status(503).json({ok:false,database:false})}});
app.get("/api/categories",(_,res)=>res.json(["کالا","خدمات","املاک","خودرو","مد و زیبایی","دیجیتال","آموزش","سرگرمی"]));
app.get("/api/ads",async(_,res)=>{if(!pool)return res.json([]);const {rows}=await pool.query("SELECT * FROM ads ORDER BY created_at DESC LIMIT 50");res.json(rows)});
app.post("/api/ads",async(req,res)=>{const {type="کالا",title,description="",price="",category="",city="",phone="",images=[]}=req.body;if(!title?.trim())return res.status(400).json({error:"عنوان آگهی الزامی است"});if(!pool)return res.status(503).json({error:"DATABASE_URL تنظیم نشده است"});const id=randomUUID();const {rows}=await pool.query("INSERT INTO ads (id,type,title,description,price,category,city,phone,images) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",[id,type,title.trim(),description,price,category,city,phone,JSON.stringify(images)]);res.status(201).json(rows[0])});
app.post("/api/upload",upload.array("images",10),(req,res)=>{const files=(req.files as Express.Multer.File[]).map(f=>({name:f.originalname,url:`/uploads/${f.filename}`}));res.json({files})});
initDb().then(()=>app.listen(process.env.PORT||4000,()=>console.log("Saqf API running"))).catch(e=>{console.error(e);process.exit(1)});