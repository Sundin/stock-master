(this["webpackJsonpstock-master"]=this["webpackJsonpstock-master"]||[]).push([[0],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"exchangeRates",(function(){return a})),n.d(t,"BASE_URL",(function(){return r})),n.d(t,"BILLION",(function(){return o})),n.d(t,"MILLION",(function(){return l})),n.d(t,"THOUSAND",(function(){return i})),n.d(t,"OPERATING_MARGIN",(function(){return s})),n.d(t,"PRICE_EARNINGS_RATIO",(function(){return c})),n.d(t,"PRICE_SALES_RATIO",(function(){return u})),n.d(t,"PRICE_BOOK_VALUE",(function(){return E})),n.d(t,"DIRECT_YIELD",(function(){return h})),n.d(t,"VOLATILITY",(function(){return p})),n.d(t,"NUMBER_OF_EMPLOYEES",(function(){return m})),n.d(t,"REVENUE",(function(){return d})),n.d(t,"REVENUE_PER_EMPLOYEE",(function(){return R})),n.d(t,"REVENUE_PER_SHARE",(function(){return f})),n.d(t,"TOTAL_ASSETS",(function(){return T})),n.d(t,"EARNINGS_PER_SHARE",(function(){return S})),n.d(t,"NET_EARNINGS",(function(){return A})),n.d(t,"NUMBER_OF_SHARES",(function(){return O})),n.d(t,"TOTAL_EQUITY",(function(){return v})),n.d(t,"TOTAL_DEBT",(function(){return I})),n.d(t,"SOLIDITY",(function(){return _})),n.d(t,"MARKET_CAP",(function(){return y})),n.d(t,"YEAR",(function(){return k})),n.d(t,"ID",(function(){return g})),n.d(t,"LAST_PRICE",(function(){return N})),n.d(t,"CURRENCY",(function(){return b})),n.d(t,"EBIT",(function(){return P})),n.d(t,"CHANGE_VALUES",(function(){return L})),n.d(t,"OLLE",(function(){return w})),n.d(t,"RETURN_ON_EQUITY",(function(){return C})),n.d(t,"RETURN_ON_CAPITAL_EMPLOYED",(function(){return D})),n.d(t,"NET_ASSET_VALUE",(function(){return U})),n.d(t,"ANNUAL_REPORTS_TABLE",(function(){return B})),n.d(t,"INTERIM_REPORTS_TABLE",(function(){return j})),n.d(t,"MULTIPLE_STOCKS_TABLE",(function(){return Y})),n.d(t,"QUARTERLY_REPORT",(function(){return V})),n.d(t,"ANNUAL_REPORT",(function(){return G}));var a={DKK:1.41,USD:9.42},r="https://bissenisse.duckdns.org:443",o=1e9,l=1e6,i=1e3,s="operatingMargin",c="priceEarningsRatio",u="priceSalesRatio",E="priceBookValue",h="directYield",p="volatility",m="numberOfEmployees",d="revenue",R="revenuePerEmployee",f="revenuePerShare",T="totalAssets",S="earningsPerShare",A="netEarnings",O="numberOfShares",v="totalEquity",I="totalDebt",_="solidity",y="marketCap",k="year",g="id",N="lastPrice",b="currency",P="earningsBeforeInterestAndTax",L="changeValues",w="OLLE",C="returnOnEquity",D="returnOnCapitalEmployed",U="netAssetValue",B="annualReportsTable",j="interimReportsTable",Y="multipleStocksTable",V="quarter",G="year"},183:function(e,t,n){e.exports=n(410)},188:function(e,t,n){},189:function(e,t,n){},215:function(e,t){},217:function(e,t){},247:function(e,t){},248:function(e,t){},292:function(e,t){},294:function(e,t){},317:function(e,t){},410:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(182),l=n.n(o),i=(n(188),n(15)),s=n(16),c=n(18),u=n(17),E=n(19),h=(n(189),n(25)),p=n(1),m=n(71),d={};function R(e){return null!=d[e]?Promise.resolve(d[e]):new Promise((function(t,n){m("https://avanza.se/_mobile/market/stock/"+e).then((function(e){var n=JSON.parse(e);n=function(e){switch(e.currency){case"SEK":return e;case"USD":return Object(h.a)({},e,{currency:"SEK",lastPrice:e.lastPrice*p.exchangeRates.USD});case"DKK":return Object(h.a)({},e,{currency:"SEK",lastPrice:e.lastPrice*p.exchangeRates.DKK});default:return console.error("Missing currency: "+e.currency),e}}(n=function(e){return{name:e.name,id:e.id,directYield:e.keyRatios.directYield,priceEarningsRatio:e.keyRatios.priceEarningsRatio,volatility:e.keyRatios.volatility,currency:e.currency,lastPrice:e.lastPrice}}(n)),d[n.id]=n,t(n)}))}))}var f={minShare:20,maxShare:30,minNumberOfStocks:8,maxNumberOfStocks:12,minRatioOfEachShareInPortfolio:5,maxRatioOfEachShareInPortfolio:30},T=[{id:"1",name:"Basportf\xf6ljen",stocks:[],strategy:Object(h.a)({},f,{minShare:40,maxShare:60})},{id:"2",name:"Raketportf\xf6ljen",stocks:[],strategy:f}];function S(e){return e.stocks.reduce((function(e,t){return e+v(t)}),0)}function A(e,t){var n=S(e)/t*100;return n>=e.strategy.minShare&&n<=e.strategy.maxShare}function O(e){return e.stocks.length>=e.strategy.minNumberOfStocks&&e.stocks.length<=e.strategy.maxNumberOfStocks}function v(e){return e.amount*e.lastPrice}function I(){return new Promise((function(e,t){var n=[];new Promise((function(e,t){var n=[];T.forEach((function(e){n.push(function(e){var t=e;return new Promise((function(n,a){var r=[];e.stocks.forEach((function(e){r.push(function(e){return new Promise((function(t,n){R(e.id).then((function(n){t(Object(h.a)({},e,{},n))}))}))}(e))})),Promise.all(r).then((function(e){t.stocks=e.sort((function(e,t){return v(t)-v(e)})),n(t)}))}))}(e))})),Promise.all(n).then((function(t){e(t)}))})).then((function(t){t.forEach((function(e){n=n.concat(e.stocks)})),e(n)}))}))}var _=n(69);function y(e){var t=e.portfolioData,n=e.totalPortfolioValue,a=S(t)/n*100;return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",{className:_({good:A(t,n),bad:!A(t,n)})},a.toFixed(2),"%"),r.a.createElement("td",{className:_({good:O(t),bad:!O(t)})},t.stocks.length))}function k(e){var t=e.portfolioData,n=t.strategy,a=n.minRatioOfEachShareInPortfolio,o=n.maxRatioOfEachShareInPortfolio;return r.a.createElement("div",null,r.a.createElement("h2",null,t.name),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"10%"},"ID"),r.a.createElement("th",{width:"30%"},"Aktie"),r.a.createElement("th",{width:"20%"},"Andel av portf\xf6lj"),r.a.createElement("th",{widrth:"30%"},"Bransch"),r.a.createElement("th",{widrth:"10%"},"P/E"))),r.a.createElement("tbody",null,t.stocks.map((function(e){return r.a.createElement(N,{stock:e,portfolioValue:S(t),minRatio:a,maxRatio:o,key:e.id})})))))}function g(e,t,n){return e>=t&&e<=n}function N(e){var t=e.stock,n=e.portfolioValue,a=e.minRatio,o=e.maxRatio,l=v(t)/n*100;return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.name),r.a.createElement("td",{className:_({good:g(l,a,o),bad:!g(l,a,o)})},l.toFixed(2),"%"),r.a.createElement("td",null,t.sector),r.a.createElement("td",null,t[p.PRICE_EARNINGS_RATIO]))}var b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={portfolios:[],error:null},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"getTotalPortfolioValue",value:function(){return this.state.portfolios.reduce((function(e,t){return e+S(t)}),0)}},{key:"render",value:function(){var e=this;if(null!=this.state.error)return r.a.createElement("p",null,this.state.error);var t=function(e){var t={};return e.forEach((function(e){e.stocks.forEach((function(e){t[e.sector]||(t[e.sector]=0),t[e.sector]+=e.amount*e.lastPrice}))})),t}(this.state.portfolios),n=[];return Object.keys(t).forEach((function(a){n.push({name:a,value:t[a]/e.getTotalPortfolioValue()*100})})),n=n.sort((function(e,t){return e.value<t.value?1:t.value<e.value?-1:0})),r.a.createElement("div",null,r.a.createElement("h1",null,"Alla portf\xf6ljer"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"40%"},"Portf\xf6lj"),r.a.createElement("th",{width:"30%"},"Andel"),r.a.createElement("th",{width:"30%"},"Antal innehav"))),r.a.createElement("tbody",null,this.state.portfolios.map((function(t){return r.a.createElement(y,{portfolioData:t,totalPortfolioValue:e.getTotalPortfolioValue(),key:t.id})})))),r.a.createElement("h2",null,"Branschf\xf6rdelning"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"40%"},"Bransch"),r.a.createElement("th",{width:"30%"},"Andel"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.value.toFixed(2),"%"))})))),this.state.portfolios.map((function(e){return r.a.createElement(k,{portfolioData:e,key:e.id})})))}}]),t}(r.a.Component),P=n(104),L=n(59),w=function(e){var t=e.style,n=void 0===t?{}:t,a=e.fill,o=void 0===a?"#000":a,l=e.width,i=void 0===l?"100%":l,s=e.className,c=void 0===s?"":s,u=e.viewBox,E=void 0===u?"0 0 576 512":u;return r.a.createElement("svg",{width:i,style:n,height:i,viewBox:E,xmlns:"http://www.w3.org/2000/svg",className:"svg-icon ".concat(c||""),xmlnsXlink:"http://www.w3.org/1999/xlink"},r.a.createElement("path",{fill:o,d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}))};function C(e){return e.directYield>Y()}function D(e){return e.directYield>1.25*Y()}function U(e){var t=e.priceEarningsRatio,n=e.directYield;return!(t<=0)&&1/(n/100)>=t}function B(e){var t=e.priceEarningsRatio,n=e.directYield;return U(e)&&1/(n/100)>=2*t}function j(e){return e.priceEarningsRatio<=0}function Y(){return 4.8}function V(e){return e.volatility<=21.6*.75}function G(e){return e.volatility<=10.8}function M(e){return e.volatility>27}function K(e){return e.volatility>41.04}function x(e){switch(e){case p.PRICE_EARNINGS_RATIO:return"P/E";case p.PRICE_SALES_RATIO:return"P/S";case p.DIRECT_YIELD:return"Direktavkastning (%)";case p.VOLATILITY:return"Volatilitet";case p.NUMBER_OF_EMPLOYEES:return"Anst\xe4llda";case p.REVENUE:return"Oms\xe4ttning";case p.REVENUE_PER_EMPLOYEE:return"Oms\xe4ttning / anst\xe4lld";case p.REVENUE_PER_SHARE:return"Oms\xe4ttning / aktie";case p.OPERATING_MARGIN:return"R\xf6relsemarginal (%)";case p.TOTAL_ASSETS:return"Tillg\xe5ngar";case p.TOTAL_EQUITY:return"Eget kapital";case p.TOTAL_DEBT:return"Skuld";case p.EARNINGS_PER_SHARE:return"EPS";case p.PRICE_BOOK_VALUE:return"P/B";case p.SOLIDITY:return"Soliditet (%)";case p.MARKET_CAP:return"B\xf6rsv\xe4rde";case p.YEAR:return"\xc5r";case p.ID:return"ID";case p.EBIT:return"EBIT";case p.NET_EARNINGS:return"Vinst";case p.RETURN_ON_EQUITY:return"ROE (%)";case p.RETURN_ON_CAPITAL_EMPLOYED:return"ROCE (%)";case p.NET_ASSET_VALUE:return"Substansv\xe4rde";default:return""}}function H(e){switch(e){case p.PRICE_EARNINGS_RATIO:return"Aktiekurs/vinst per aktie";case p.PRICE_SALES_RATIO:return"Aktiekurs/oms\xe4ttning per aktie";case p.DIRECT_YIELD:return"Direktavkastning (%)";case p.VOLATILITY:return"Volatilitet (%)";case p.NUMBER_OF_EMPLOYEES:return"Antal anst\xe4llda";case p.REVENUE:return"Oms\xe4ttning";case p.REVENUE_PER_EMPLOYEE:return"Oms\xe4ttning / anst\xe4lld";case p.REVENUE_PER_SHARE:return"Oms\xe4ttning / aktie";case p.OPERATING_MARGIN:return"R\xf6relsemarginal (%)";case p.TOTAL_ASSETS:return"Tillg\xe5ngar";case p.TOTAL_EQUITY:return"Eget kapital";case p.TOTAL_DEBT:return"Skuld";case p.EARNINGS_PER_SHARE:return"Vinst per aktie";case p.PRICE_BOOK_VALUE:return"Aktiekurs/eget kapital per aktie";case p.SOLIDITY:return"Soliditet (%)";case p.MARKET_CAP:return"B\xf6rsv\xe4rde";case p.YEAR:return"\xc5r";case p.ID:return"ID";case p.EBIT:return"Vinst f\xf6re skatt";case p.NET_EARNINGS:return"Nettoresultat";case p.RETURN_ON_EQUITY:return"R\xe4ntabilitet p\xe5 eget kapital (%)";case p.RETURN_ON_CAPITAL_EMPLOYED:return"R\xe4ntabilitet p\xe5 sysselsatt kapital (%)";case p.NET_ASSET_VALUE:return"Substansv\xe4rde (p\xe5 b\xf6rsnoterade innehav)";default:return""}}var Q=n(1),F=Q.YEAR,q=Q.BILLION,J=Q.MILLION,z=Q.THOUSAND;function W(e,t){return X(e)?$(t):t}function X(e){switch(e){case F:case"_id":return!1;default:return!0}}function $(e){if(isNaN(e)||"number"!==typeof e)return e;var t="",n=e<0;return n&&(e*=-1),t=e>=q?e.toPrecision(3)/q+" miljarder":e>=J?e.toPrecision(3)/J+" miljoner":e>=z?function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t.join(".")}(e.toFixed(0)):e.toPrecision(3).replace(".00e+3"," 000"),n&&(t="-"+t),t}var Z=n(69);function ee(e){var t=e.stocks,n=e.ownedStocks,a=e.sortKey,o=e.columnsToShow,l=e.type,i=e.reportType;return a&&t.sort((function(e,t){return t[a]-e[a]})),r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"40%"},function(e){switch(e){case p.ANNUAL_REPORTS_TABLE:return x(p.YEAR);case p.INTERIM_REPORTS_TABLE:return"Period";default:return"Aktie"}}(l)),o.map((function(e){return r.a.createElement("th",{width:"15%",key:e,"data-tip":H(e)},x(e))})))),r.a.createElement("tbody",null,t.map((function(t){var a=function(e,t){var n=!1;return t.forEach((function(t){t.id!==e||(n=!0)})),n}(t.id,n);return r.a.createElement(te,{stockData:i===p.QUARTERLY_REPORT?Object(h.a)({},t,{},t.latestInterimReport):Object(h.a)({},t,{},t.latestAnnualReport),key:t.id,owned:a,columnsToShow:o,showSingleStock:e.showSingleStock,handleClickReport:e.handleClickReport,type:l,reportType:i})})))),r.a.createElement(L.a,null))}var te=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).formatDate=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+" ."},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.showSingleStock(this.props.stockData.id,this.props.columnsToShow)}},{key:"handleClickReport",value:function(e){this.props.handleClickReport(e)}},{key:"renderMainColumn",value:function(){var e=this,t=this.props,n=t.type,a=t.stockData,o=t.owned,l=t.reportType;switch(n){case p.ANNUAL_REPORTS_TABLE:return r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:function(){return e.handleClickReport(a)}},a.year));case p.INTERIM_REPORTS_TABLE:return r.a.createElement("td",null,r.a.createElement("a",{href:"#",onClick:function(){return e.handleClickReport(a)}},a.year," ",a.period));default:return r.a.createElement("td",{className:Z({owned:o})},r.a.createElement(L.a,null),r.a.createElement("a",{href:"#",onClick:function(){return e.handleClick()}},a.name),"SEK"===a.currency?"":" ("+a.currency+")",this.shouldShowOldReportWarning(a.reportDate,l)?r.a.createElement("a",{"data-tip":"Avser rapport fr\xe5n "+this.formatDate(new Date(a.reportDate))},r.a.createElement(w,{width:20,fill:"#fa2"})):"")}}},{key:"shouldShowOldReportWarning",value:function(e,t){if(!e)return!1;var n=(new Date).getTime(),a=new Date(e).getTime();return t===p.ANNUAL_REPORT?n-a>315576e5:n-a>78894e5}},{key:"renderStockData",value:function(e){var t=this.props,n=t.stockData;switch(t.type){case p.ANNUAL_REPORTS_TABLE:case p.INTERIM_REPORTS_TABLE:var a=W(e,n[e]);if(!n.changeValues)return a;var r=n.changeValues[e];return!r||isNaN(r)?a:a+" ("+(n.changeValues[e]>0?"+":"")+n.changeValues[e]+"%)";default:return W(e,n[e])}}},{key:"render",value:function(){var e=this,t=this.props,n=t.stockData,a=t.columnsToShow;return r.a.createElement("tr",{key:n.id},this.renderMainColumn(),a.map((function(t){return r.a.createElement("td",{width:"15%",key:t,className:ne(t,n)},e.renderStockData(t))})))}}]),t}(r.a.Component);function ne(e,t){switch(e){case"priceEarningsRatio":return Z({good:U(t),veryGood:B(t),veryBad:j(t)});case"directYield":return Z({good:C(t),veryGood:D(t)});case"volatility":return Z({good:V(t),veryGood:G(t),bad:M(t),veryBad:K(t)});default:return Z({})}}ee.defaultProps={type:p.MULTIPLE_STOCKS_TABLE,columnsToShow:[p.ID,p.PRICE_EARNINGS_RATIO,p.DIRECT_YIELD,p.VOLATILITY]};var ae=ee,re=n(71);var oe=n(70),le=n(58),ie=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(c.a)(this,Object(u.a)(t).call(this,e)),e.reportData?n.state=e.reportData:n.state={currency:"SEK",multiplier:"NONE",period:"YEAR",year:2020,revenue:0,earningsBeforeInterestAndTax:0,netEarnings:0,totalAssets:0,totalEquity:0,totalDebt:0,numberOfShares:0,numberOfEmployees:0,reportDate:""},n.handleInputChange=n.handleInputChange.bind(Object(le.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(le.a)(n)),n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(oe.a)({},a,n))}},{key:"multiply",value:function(e){if(!this.state.multiplier||""===this.state.multiplier)return 1*e;switch(this.state.multiplier){case"MILLION":return e*p.MILLION;case"BILLION":return e*p.BILLION;case"THOUSAND":return e*p.THOUSAND;case"NONE":default:return 1*e}}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n,a,r={currency:this.state.currency,year:1*this.state.year,revenue:this.multiply(this.state.revenue),earningsBeforeInterestAndTax:this.multiply(this.state.earningsBeforeInterestAndTax),netEarnings:this.multiply(this.state.netEarnings),numberOfShares:1*this.state.numberOfShares,numberOfEmployees:1*this.state.numberOfEmployees,reportDate:new Date(this.state.reportDate)};"YEAR"!==this.state.period&&(r.period=this.state.period),0!==this.state.totalAssets&&(r.totalAssets=this.multiply(this.state.totalAssets)),0!==this.state.totalEquity&&(r.totalEquity=this.multiply(this.state.totalEquity)),0!==this.state.totalDebt&&(r.totalDebt=this.multiply(this.state.totalDebt)),(n=this.props.id,a=r,new Promise((function(e,t){re({method:"PUT",uri:"".concat(p.BASE_URL,"/stock/").concat(n,"/reports"),body:a,json:!0}).then((function(t){e(t)}))}))).then((function(){t.props.reportSaved()}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,this.props.stockDetails.name," \u2013 L\xe4gg till rapport"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"\xc5r:",r.a.createElement("input",{name:"year",type:"number",value:this.state.year,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Kvartal:",r.a.createElement("select",{name:"period",value:this.state.period,onChange:this.handleInputChange},r.a.createElement("option",{value:"YEAR"},"Hel\xe5r"),r.a.createElement("option",{value:"Q1"},"Q1"),r.a.createElement("option",{value:"Q2"},"Q2"),r.a.createElement("option",{value:"Q3"},"Q3"),r.a.createElement("option",{value:"Q4"},"Q4"))),r.a.createElement("br",null),r.a.createElement("label",null,"Rapportdatum:",r.a.createElement("input",{name:"reportDate",type:"string",value:this.state.reportDate,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("h3",null,"R\xe4kenskaper"),r.a.createElement("label",null,"Valuta:",r.a.createElement("select",{name:"multiplier",value:this.state.multiplier,onChange:this.handleInputChange},r.a.createElement("option",{value:"NONE"}),r.a.createElement("option",{value:"THOUSAND"},"Tusen"),r.a.createElement("option",{value:"MILLION"},"Miljoner"),r.a.createElement("option",{value:"BILLION"},"Miljarder")),r.a.createElement("select",{name:"currency",value:this.state.currency,onChange:this.handleInputChange},r.a.createElement("option",{value:"SEK"},"SEK"),r.a.createElement("option",{value:"EUR"},"EUR"),r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"DKK"},"DKK"))),r.a.createElement("br",null),r.a.createElement("label",null,"Oms\xe4ttning (revenue):",r.a.createElement("input",{name:"revenue",type:"number",value:this.state.revenue,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"R\xf6relseresultat (EBIT):",r.a.createElement("input",{name:"earningsBeforeInterestAndTax",type:"number",value:this.state.earningsBeforeInterestAndTax,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Vinst (Net earnings):",r.a.createElement("input",{name:"netEarnings",type:"number",value:this.state.netEarnings,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Tillg\xe5ngar (Total assets):",r.a.createElement("input",{name:"totalAssets",type:"number",value:this.state.totalAssets,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Eget kapital (Total equity):",r.a.createElement("input",{name:"totalEquity",type:"number",value:this.state.totalEquity,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Skuld (Total debt):",r.a.createElement("input",{name:"totalDebt",type:"number",value:this.state.totalDebt,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("h3",null,"Annan info"),r.a.createElement("label",null,"Antal anst\xe4llda:",r.a.createElement("input",{name:"numberOfEmployees",type:"number",value:this.state.numberOfEmployees,onChange:this.handleInputChange})),r.a.createElement("label",null,"Antal aktier (samtliga aktieslag):",r.a.createElement("input",{name:"numberOfShares",type:"number",value:this.state.numberOfShares,onChange:this.handleInputChange})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(r.a.Component),se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={stocksDetails:null,error:null,showReportInput:!1,reportData:null},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.id,new Promise((function(t,n){re({uri:"".concat(p.BASE_URL,"/stock/").concat(e)}).then((function(e){var n=JSON.parse(e);t(n)}))}))).then((function(e){t.setState({stockDetails:e})}))}},{key:"getColumnsToShow",value:function(){var e=this.props.columnsToShow.filter((function(e){return e!==p.PRICE_EARNINGS_RATIO&&e!==p.VOLATILITY&&e!==p.DIRECT_YIELD&&e!==p.MARKET_CAP&&e!==p.PRICE_BOOK_VALUE&&e!==p.PRICE_SALES_RATIO&&e!==p.NET_ASSET_VALUE})),t=[p.REVENUE,p.EBIT,p.NET_EARNINGS,p.TOTAL_ASSETS,p.TOTAL_EQUITY,p.TOTAL_DEBT];return Object(P.a)(new Set([].concat(Object(P.a)(e),t)))}},{key:"renderAnnualReports",value:function(){var e=this.state.stockDetails;return e.annualReports?r.a.createElement("div",null,r.a.createElement("h2",null,"\xc5rsrapporter"),r.a.createElement(ae,{type:p.ANNUAL_REPORTS_TABLE,stocks:e.annualReports,ownedStocks:[],columnsToShow:this.getColumnsToShow(),handleClickReport:this.handleClickReport.bind(this)})):r.a.createElement("div",null)}},{key:"renderInterimReports",value:function(){var e=this.state.stockDetails;return e.interimReports?r.a.createElement("div",null,r.a.createElement("h2",null,"Kvartalsrapporter"),r.a.createElement(ae,{type:p.INTERIM_REPORTS_TABLE,stocks:e.interimReports,ownedStocks:[],columnsToShow:this.getColumnsToShow(),handleClickReport:this.handleClickReport.bind(this)})):r.a.createElement("div",null)}},{key:"handleClickReport",value:function(e){this.setState({showReportInput:!0,reportData:e})}},{key:"reportSaved",value:function(){this.setState({showReportInput:!1,reportData:null})}},{key:"renderInputSection",value:function(){return this.props.id?r.a.createElement("div",null,r.a.createElement(ie,{id:this.props.id,stockDetails:this.state.stockDetails,reportData:this.state.reportData,reportSaved:this.reportSaved.bind(this)})):r.a.createElement("div",null)}},{key:"renderNewReportButton",value:function(){var e=this;return r.a.createElement("button",{onClick:function(){e.setState({showReportInput:!0,reportData:null})}},"New Report")}},{key:"render",value:function(){if(null!=this.state.error)return r.a.createElement("p",null,this.state.error);var e=this.state,t=e.stockDetails,n=e.showReportInput;return t?n?this.renderInputSection():r.a.createElement("div",null,r.a.createElement("h1",null,t.name),this.renderAnnualReports(),this.renderInterimReports(),r.a.createElement("hr",null),this.renderNewReportButton()):r.a.createElement("div",null)}}]),t}(r.a.Component),ce=n(71);var ue=n(69),Ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={stocks:[],ownedStocks:[],error:null,sortKey:"priceEarningsRatio"},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){this.props.category!==e.category&&this.loadData()}},{key:"loadData",value:function(){var e,t=this;(e=this.props.category,new Promise((function(t,n){ce("".concat(p.BASE_URL,"/category/").concat(e)).then((function(e){var n=JSON.parse(e);t(n.stocks)}))}))).then((function(e){t.setState({stocks:e})})).catch((function(e){console.error(e),t.setState({error:e.message})})),I().then((function(e){t.setState({ownedStocks:e})}))}},{key:"renderButtons",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,"Visa senaste:",r.a.createElement("button",{onClick:function(){e.props.setReportType(p.ANNUAL_REPORT)},className:ue({active:this.props.reportType===p.ANNUAL_REPORT}),"data-tip":"Visa data fr\xe5n senaste \xe5rsredovisningen"},"Hel\xe5r"),r.a.createElement("button",{onClick:function(){e.props.setReportType(p.QUARTERLY_REPORT)},className:ue({active:this.props.reportType===p.QUARTERLY_REPORT}),"data-tip":"Visa data fr\xe5n senaste kvartalsrapporten"},"Kvartal"),r.a.createElement(L.a,null))}},{key:"render",value:function(){var e=this;return null!=this.state.error?r.a.createElement("p",null,this.state.error):r.a.createElement("div",null,r.a.createElement("h1",null,this.props.title),this.renderButtons(),r.a.createElement(ae,{stocks:this.state.stocks,ownedStocks:this.state.ownedStocks,sortKey:this.state.sortKey,onSort:function(t){e.setState({sortKey:t})},showSingleStock:this.props.showSingleStock,columnsToShow:this.props.columnsToShow,reportType:this.props.reportType}))}}]),t}(r.a.Component),he=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={stocks:[],ownedStocks:[],error:null,sortKey:p.PRICE_EARNINGS_RATIO,columnsToShow:[p.PRICE_EARNINGS_RATIO,p.DIRECT_YIELD,p.VOLATILITY,p.PRICE_BOOK_VALUE,p.EARNINGS_PER_SHARE,p.REVENUE_PER_EMPLOYEE,p.REVENUE_PER_SHARE,p.OPERATING_MARGIN,p.SOLIDITY,p.PRICE_SALES_RATIO,p.MARKET_CAP,p.RETURN_ON_EQUITY,p.RETURN_ON_CAPITAL_EMPLOYED]},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Ee,{category:"forest",title:"Skog",columnsToShow:this.state.columnsToShow,reportType:this.props.reportType,setReportType:this.props.setReportType,showSingleStock:this.props.showSingleStock})}}]),t}(r.a.Component),pe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={stocks:[],ownedStocks:[],error:null,sortKey:"priceEarningsRatio",columnsToShow:[p.PRICE_EARNINGS_RATIO,p.DIRECT_YIELD,p.NET_EARNINGS,p.EBIT,p.EARNINGS_PER_SHARE,p.TOTAL_ASSETS,p.PRICE_BOOK_VALUE,p.SOLIDITY,p.RETURN_ON_EQUITY,p.RETURN_ON_CAPITAL_EMPLOYED,p.MARKET_CAP,p.NET_ASSET_VALUE]},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Ee,{category:"invest",title:"Investmentbolag",columnsToShow:this.state.columnsToShow,reportType:this.props.reportType,setReportType:this.props.setReportType,showSingleStock:this.props.showSingleStock})}}]),t}(r.a.Component),me=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={stocks:[],ownedStocks:[],error:null,sortKey:p.PRICE_EARNINGS_RATIO,columnsToShow:[p.PRICE_EARNINGS_RATIO,p.DIRECT_YIELD,p.VOLATILITY,p.PRICE_BOOK_VALUE,p.EARNINGS_PER_SHARE,p.REVENUE_PER_EMPLOYEE,p.REVENUE_PER_SHARE,p.OPERATING_MARGIN,p.SOLIDITY,p.PRICE_SALES_RATIO,p.MARKET_CAP,p.RETURN_ON_EQUITY]},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Ee,{category:"bank",title:"Bank",columnsToShow:this.state.columnsToShow,reportType:this.props.reportType,setReportType:this.props.setReportType,showSingleStock:this.props.showSingleStock})}}]),t}(r.a.Component),de=n(69),Re=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activePage:"BEST_YIELD_PAGE",activeStock:null,columnsToShow:[],reportType:p.ANNUAL_REPORT},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"renderActivePage",value:function(){if(this.state.activeStock)return r.a.createElement(se,{id:this.state.activeStock,columnsToShow:this.state.columnsToShow});var e={reportType:this.state.reportType,setReportType:this.setReportType.bind(this),showSingleStock:this.showSingleStock.bind(this)};switch(this.state.activePage){case"PORTFOLIO_PAGE":return r.a.createElement(b,{showSingleStock:this.showSingleStock.bind(this)});case"BEST_YIELD_PAGE":return r.a.createElement(Ee,Object.assign({category:"best-yield",title:"Intressanta utdelningsaktier"},e));case"BLUE_CHIP_PAGE":return r.a.createElement(Ee,Object.assign({category:"blue-chip",title:"Intressanta basaktier"},e));case"INDUSTRY_PAGE":return r.a.createElement(Ee,Object.assign({category:"industry",title:"Verkstad"},e));case"FOREST_PAGE":return r.a.createElement(he,e);case"INVEST_PAGE":return r.a.createElement(pe,e);case"REAL_ESTATE_PAGE":return r.a.createElement(Ee,Object.assign({category:"realEstate",title:"Fastighetsbolag"},e));case"BANK_PAGE":return r.a.createElement(me,e);default:return r.a.createElement("div",null)}}},{key:"renderButton",value:function(e,t){var n=this;return r.a.createElement("button",{onClick:function(){n.setState({activePage:t,activeStock:null})},className:de({active:this.state.activePage===t})},e)}},{key:"showSingleStock",value:function(e,t){this.setState({activeStock:e,columnsToShow:t})}},{key:"setReportType",value:function(e){this.setState({reportType:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"BisseNisse"),this.renderButton("Utdelningsaktier","BEST_YIELD_PAGE"),this.renderButton("Basaktier","BLUE_CHIP_PAGE"),this.renderButton("Verkstad","INDUSTRY_PAGE"),this.renderButton("Skog","FOREST_PAGE"),this.renderButton("Investment","INVEST_PAGE"),this.renderButton("Fastigheter","REAL_ESTATE_PAGE"),this.renderButton("Bank","BANK_PAGE"),this.renderActivePage())}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[183,1,2]]]);
//# sourceMappingURL=main.02ac8c0e.chunk.js.map