(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44284,e=>{var t=e.i(43476),a=e.i(71645);function l({code:e,caption:a,tone:s="paper"}){return(0,t.jsxs)("figure",{className:"flex flex-col gap-3",children:[a&&(0,t.jsx)("figcaption",{className:`t-label ${"night"===s?"text-bone/45":"text-ink/45"}`,children:a}),(0,t.jsx)("pre",{className:`t-mono overflow-x-auto border px-5 py-4 leading-relaxed ${"night"===s?"border-bone/15 text-bone/85":"border-ink/15 text-ink/85"}`,children:(0,t.jsx)("code",{children:e})})]})}let s=`from proofspan import FinancialClaim, Scale, SourceValue, fiscal_year
from proofspan_sdk import ProofspanClient

client = ProofspanClient("http://127.0.0.1:8000")

outcome = client.validate(
    FinancialClaim(text="Revenue grew 25%", metric="revenue_growth", claimed_value=25),
    previous=SourceValue(name="revenue", value=100, scale=Scale.MILLION, period=fiscal_year(2024)),
    current=SourceValue(name="revenue", value=120, scale=Scale.MILLION, period=fiscal_year(2025)),
)

outcome.status            # FAIL
outcome.expected_value    # 20.0
outcome.discrepancy       # 5.0  (percentage points)
outcome.equation          # "(120,000,000 - 100,000,000) / 100,000,000"`,i=`from datetime import date
from zoneinfo import ZoneInfo
from proofspan.temporal import EvaluationCutoff

cutoff = EvaluationCutoff.end_of_day(date(2025, 3, 31), tz=ZoneInfo("America/New_York"))

pit = client.validate(claim, previous=fy2023, current=fy2024_restated, cutoff=cutoff)
pit.leakage               # True: the restated figure was published 40 days after the cutoff
pit.temporal_findings[2]["explanation"]`,r=`result = client.statistics(
    "reliability_diagram",
    probs=model_probabilities,
    outcomes=realised_outcomes,
    claim=FinancialClaim(text="Forecasts are calibrated within 1 pp", metric="ece", claimed_value=1),
)

result.value              # expected calibration error
result.warnings           # ["observed frequencies differ from expected (Hosmer-Lemeshow p = ...)"]
result.validation["status"]   # FAIL`;var o=e.i(9165);let n=`curl -s -X POST http://127.0.0.1:8000/api/v1/validate \\
  -H 'Content-Type: application/json' -d '{
  "claim":  {"text": "Revenue grew 25%", "metric": "revenue_growth", "claimed_value": 25},
  "inputs": {
    "previous": {"name": "revenue", "value": 100, "scale": "million", "currency": "USD"},
    "current":  {"name": "revenue", "value": 120, "scale": "million", "currency": "USD"}
  }
}'`;e.s(["ApiDocs",0,function({tone:e="paper"}){let[c,d]=(0,a.useState)(null),[p,m]=(0,a.useState)(null),[h,u]=(0,a.useState)(""),f="night"===e?"text-bone/55":"text-ink/55",x="night"===e?"border-bone/15":"border-ink/15";return(0,a.useEffect)(()=>{let e=setTimeout(()=>u((0,o.W)()),0);return o.k.openapi().then(e=>{let t=e.paths,a=[];for(let[e,l]of Object.entries(t))for(let[t,s]of Object.entries(l))a.push({method:t.toUpperCase(),path:e,summary:String(s.summary??""),description:String(s.description??""),tag:Array.isArray(s.tags)?String(s.tags[0]):""});d(a.sort((e,t)=>e.path.localeCompare(t.path)))}).catch(e=>m((0,o.z)(e))),()=>clearTimeout(e)},[]),(0,t.jsxs)("div",{className:"flex flex-col gap-20",children:[(0,t.jsxs)("section",{children:[(0,t.jsx)("p",{className:`t-label ${f}`,children:"Install"}),(0,t.jsxs)("div",{className:"mt-6 grid gap-8 lg:grid-cols-2",children:[(0,t.jsx)(l,{tone:e,caption:"local development",code:`make setup          # venv, engines, API, SDK, frontend deps
make api            # http://127.0.0.1:8000  (docs at /docs)
make web            # http://localhost:3000`}),(0,t.jsx)(l,{tone:e,caption:"first request",code:n})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-baseline justify-between gap-4",children:[(0,t.jsxs)("p",{className:`t-label ${f}`,children:["Endpoints · read live from ",h||"the API","/openapi.json"]}),p&&(0,t.jsx)("p",{className:"text-sm text-fail",children:p})]}),(0,t.jsxs)("ul",{className:`mt-6 border-t ${x}`,children:[(c??[]).map(e=>(0,t.jsxs)("li",{className:`grid gap-2 border-b py-5 md:grid-cols-12 md:gap-6 ${x}`,children:[(0,t.jsxs)("p",{className:"t-mono md:col-span-4",children:[(0,t.jsx)("span",{className:"mr-3 inline-block w-12 opacity-60",children:e.method}),e.path]}),(0,t.jsxs)("p",{className:"md:col-span-8",children:[(0,t.jsx)("span",{children:e.summary}),e.description&&(0,t.jsx)("span",{className:`mt-1 block text-sm ${f}`,children:e.description})]})]},e.method+e.path)),!c&&!p&&(0,t.jsx)("li",{className:`py-5 text-sm ${f}`,children:"Loading the schema…"})]}),(0,t.jsxs)("p",{className:`t-mono mt-4 text-xs ${f}`,children:["Errors share one shape: ","{",'"error": ',"{",'"type", "message", "field"',"}",', "details": [...]',"}"," with 404 / 413 / 422 / 429."]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("p",{className:`t-label ${f}`,children:"Python SDK"}),(0,t.jsxs)("div",{className:"mt-6 grid gap-8 lg:grid-cols-2",children:[(0,t.jsx)(l,{tone:e,caption:"verify a claim",code:s}),(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsx)(l,{tone:e,caption:"evaluate as of a date",code:i}),(0,t.jsx)(l,{tone:e,caption:"score a forecast",code:r})]})]})]}),(0,t.jsxs)("section",{id:"source",className:"scroll-mt-24",children:[(0,t.jsx)("p",{className:`t-label ${f}`,children:"Source"}),(0,t.jsx)("p",{className:"mt-4 max-w-[60ch]",children:"Proofspan is developed in a private repository during the build-out. The public GitHub organisation will be linked here when it opens. Until then the complete source, tests and examples ship with the local checkout."})]})]})}],44284)},81331,e=>{var t=e.i(43476),a=e.i(25164),l=e.i(22016),s=e.i(18566),i=e.i(71645);let r=[{href:"/research",label:"Research"},{href:"/framework",label:"Framework"},{href:"/docs",label:"Documentation"},{href:"/docs#source",label:"GitHub",title:"Source is currently private; see Documentation → Source"}];e.s(["SiteNav",0,function({tone:e="paper"}){let o=(0,s.usePathname)(),[n,c]=(0,i.useState)(!1),d="night"===e?"text-bone":"text-ink",p="night"===e?"text-bone/60 hover:text-bone":"text-ink/60 hover:text-ink";return(0,t.jsxs)("header",{className:`relative z-20 ${d}`,children:[(0,t.jsxs)("nav",{"aria-label":"Primary",className:"mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-6 md:px-10",children:[(0,t.jsxs)(l.default,{href:"/",className:"wordmark flex items-center gap-2.5 lowercase",children:[(0,t.jsx)(a.default,{src:"/logo-mark.svg",alt:"",width:22,height:22,priority:!0}),"proofspan"]}),(0,t.jsxs)("ul",{className:"hidden items-center gap-8 md:flex",children:[r.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:e.href,title:"title"in e?e.title:void 0,className:`t-label transition-colors ${o===e.href?d:p}`,children:e.label})},e.label)),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/app",className:`t-label border-b pb-0.5 transition-colors ${"night"===e?"border-bone/40 hover:border-bone":"border-ink/40 hover:border-ink"}`,children:"Open app →"})})]}),(0,t.jsx)("button",{type:"button","aria-expanded":n,"aria-controls":"mobile-nav",onClick:()=>c(e=>!e),className:"t-label md:hidden",children:n?"Close":"Menu"})]}),n&&(0,t.jsxs)("ul",{id:"mobile-nav",className:`flex flex-col gap-5 px-5 pb-8 md:hidden ${"night"===e?"bg-night":"bg-paper"}`,children:[r.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:e.href,onClick:()=>c(!1),className:"t-title font-light",children:e.label})},e.label)),(0,t.jsx)("li",{children:(0,t.jsx)(l.default,{href:"/app",onClick:()=>c(!1),className:"t-title font-light",children:"Open app →"})})]})]})}])}])})();