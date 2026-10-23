import {Search, Plus, MapPin, Heart, MessageCircle, Star, ArrowLeft, Sparkles, ShoppingBag, Users} from "lucide-react";

const ads=[
 {title:"طراحی سایت حرفه‌ای برای کسب‌وکارها",type:"خدمت",price:"از ۸٬۵۰۰٬۰۰۰ تومان",city:"تهران",seller:"استودیو آبی",rating:"4.9",image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"},
 {title:"دوربین بدون آینه Sony",type:"کالا",price:"۴۲٬۰۰۰٬۰۰۰ تومان",city:"کرج",seller:"محمد رضایی",rating:"4.8",image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"},
 {title:"عکاسی و تولید محتوای برند",type:"کالا + خدمت",price:"توافقی",city:"تهران",seller:"مریم کریمی",rating:"5.0",image:"https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80"},
 {title:"مبل مدرن دست‌ساز",type:"کالا",price:"۲۸٬۰۰۰٬۰۰۰ تومان",city:"اصفهان",seller:"خانه چوب",rating:"4.7",image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"}
];

const cats=[["کالا","🛍️"],["خدمات","🧰"],["املاک","🏠"],["خودرو","🚗"],["مد و زیبایی","✨"],["دیجیتال","💻"],["آموزش","🎓"],["سرگرمی","🎨"]];

export default function Home(){
 return <main className="min-h-screen">
  <nav className="glass sticky top-0 z-20 border-b border-slate-200/70">
   <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
    <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-xl font-black text-white">س</div><div><div className="text-xl font-black">سقف</div><div className="text-[11px] text-slate-500">بازار آدم‌ها و ایده‌ها</div></div></div>
    <div className="hidden items-center gap-7 md:flex text-sm font-semibold text-slate-600"><span>آگهی‌ها</span><span>خدمات</span><span>سازنده‌ها</span><span>دنبال‌کردنی‌ها</span></div>
    <button className="flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white"><Plus size={17}/> ثبت آگهی</button>
   </div>
  </nav>
  <section className="relative overflow-hidden bg-slate-950 text-white">
   <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 md:pt-24">
    <div className="max-w-3xl">
     <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-slate-200"><Sparkles size={14}/> خرید، فروش، خدمات و ساختن ارتباط</div>
     <h1 className="text-4xl font-black leading-tight md:text-6xl">هر چیزی که می‌خواهی،<br/><span className="text-slate-300">زیر یک سقف.</span></h1>
     <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">سقف جایی است که کالا، خدمات و آدم‌های خلاق کنار هم قرار می‌گیرند؛ با پروفایل شخصی، نمونه‌کار و ارتباط مستقیم.</p>
     <div className="mt-8 flex max-w-3xl items-center gap-2 rounded-3xl bg-white p-2 text-slate-900 shadow-2xl">
      <Search className="mr-3 text-slate-400" size={21}/><input className="min-w-0 flex-1 bg-transparent px-2 py-3 outline-none" placeholder="مثلاً طراحی سایت، لپ‌تاپ، عکاس..." /><button className="rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white">جستجو</button>
     </div>
     <div className="mt-4 flex gap-2 text-xs text-slate-400"><span>جستجوی محبوب:</span><span>طراحی سایت</span><span>•</span><span>موبایل</span><span>•</span><span>عکاسی</span></div>
    </div>
   </div>
  </section>
  <section className="mx-auto max-w-7xl px-5 py-10">
   <div className="mb-5 flex items-end justify-between"><div><h2 className="text-2xl font-black">دسته‌بندی‌ها</h2><p className="mt-1 text-sm text-slate-500">از کالا تا تخصص و خدمات</p></div><ArrowLeft size={20}/></div>
   <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">{cats.map(([n,e])=><div key={n} className="card cursor-pointer p-4 transition hover:-translate-y-1 hover:shadow-lg"><div className="text-2xl">{e}</div><div className="mt-3 text-sm font-bold">{n}</div><div className="mt-1 text-xs text-slate-400">۲۴۰۰+ آگهی</div></div>)}</div>
  </section>
  <section className="mx-auto max-w-7xl px-5 pb-12">
   <div className="mb-5 flex items-center justify-between"><div><h2 className="text-2xl font-black">پیشنهادهای امروز</h2><p className="mt-1 text-sm text-slate-500">آگهی‌هایی که ارزش دیدن دارند</p></div><button className="text-sm font-bold">مشاهده همه ←</button></div>
   <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{ads.map(a=><article className="card overflow-hidden" key={a.title}><div className="relative aspect-[4/3] overflow-hidden"><img src={a.image} alt="" className="h-full w-full object-cover"/><div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">{a.type}</div><button className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90"><Heart size={17}/></button></div><div className="p-4"><h3 className="font-black leading-6">{a.title}</h3><div className="mt-2 font-black">{a.price}</div><div className="mt-3 flex items-center justify-between text-xs text-slate-500"><span className="flex items-center gap-1"><MapPin size={13}/>{a.city}</span><span className="flex items-center gap-1"><Star size={13} fill="currentColor"/>{a.rating}</span></div><div className="mt-4 flex items-center justify-between border-t pt-3 text-xs"><span className="font-bold">{a.seller}</span><button className="flex items-center gap-1 font-bold"><MessageCircle size={14}/> پیام</button></div></div></article>)}</div>
  </section>
  <section className="mx-auto max-w-7xl px-5 pb-16">
   <div className="grid gap-4 md:grid-cols-3">
    {[["پروفایل حرفه‌ای","هر فروشنده یک صفحه شخصی با نمونه‌کار، آگهی و دنبال‌کننده دارد.",Users],["فروش کالا + خدمات","یک آگهی می‌تواند کالا، خدمت یا ترکیبی از هر دو باشد.",ShoppingBag],["ارتباط مستقیم","گفت‌وگوی داخلی و ارتباط سریع با آگهی‌دهنده.",MessageCircle]].map(([t,d,I])=><div className="card p-6" key={String(t)}><I size={24}/><h3 className="mt-5 font-black">{String(t)}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{String(d)}</p></div>)}
   </div>
  </section>
  <footer className="border-t bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"><span>© سقف — بازار کالا، خدمات و سازندگان</span><span>امنیت • قوانین • پشتیبانی</span></div></footer>
 </main>
}