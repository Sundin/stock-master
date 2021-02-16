(this["webpackJsonpstock-master"]=this["webpackJsonpstock-master"]||[]).push([[0],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"exchangeRates",(function(){return r})),n.d(t,"SHOW_PORTFOLIO",(function(){return a})),n.d(t,"BASE_URL",(function(){return o})),n.d(t,"BILLION",(function(){return l})),n.d(t,"MILLION",(function(){return i})),n.d(t,"THOUSAND",(function(){return s})),n.d(t,"OPERATING_MARGIN",(function(){return c})),n.d(t,"PRICE_EARNINGS_RATIO",(function(){return u})),n.d(t,"PRICE_SALES_RATIO",(function(){return E})),n.d(t,"PRICE_BOOK_VALUE",(function(){return h})),n.d(t,"DIRECT_YIELD",(function(){return p})),n.d(t,"VOLATILITY",(function(){return m})),n.d(t,"NUMBER_OF_EMPLOYEES",(function(){return R})),n.d(t,"REVENUE",(function(){return T})),n.d(t,"REVENUE_PER_EMPLOYEE",(function(){return d})),n.d(t,"REVENUE_PER_SHARE",(function(){return A})),n.d(t,"TOTAL_ASSETS",(function(){return f})),n.d(t,"EARNINGS_PER_SHARE",(function(){return _})),n.d(t,"NET_EARNINGS",(function(){return S})),n.d(t,"NUMBER_OF_SHARES",(function(){return O})),n.d(t,"TOTAL_EQUITY",(function(){return I})),n.d(t,"TOTAL_DEBT",(function(){return P})),n.d(t,"SOLIDITY",(function(){return k})),n.d(t,"MARKET_CAP",(function(){return v})),n.d(t,"YEAR",(function(){return y})),n.d(t,"ID",(function(){return g})),n.d(t,"LAST_PRICE",(function(){return N})),n.d(t,"CURRENCY",(function(){return L})),n.d(t,"EBIT",(function(){return b})),n.d(t,"CHANGE_VALUES",(function(){return C})),n.d(t,"OLLE",(function(){return w})),n.d(t,"RETURN_ON_EQUITY",(function(){return D})),n.d(t,"RETURN_ON_CAPITAL_EMPLOYED",(function(){return B})),n.d(t,"NET_ASSET_VALUE",(function(){return U})),n.d(t,"PROFIT_FROM_PROPERTY_MANAGEMENT_BEFORE_TAX",(function(){return M})),n.d(t,"PFPMBF_PER_SHARE",(function(){return Y})),n.d(t,"PRICE_PFPMBT_RATIO",(function(){return j})),n.d(t,"PRICE_PFPMAT_RATIO",(function(){return V})),n.d(t,"ANNUAL_REPORTS_TABLE",(function(){return G})),n.d(t,"INTERIM_REPORTS_TABLE",(function(){return F})),n.d(t,"MULTIPLE_STOCKS_TABLE",(function(){return K})),n.d(t,"QUARTERLY_REPORT",(function(){return x})),n.d(t,"ANNUAL_REPORT",(function(){return H}));var r={DKK:1.39,USD:8.72,EUR:10.35},a=!1,o="https://bissenisse.duckdns.org:443",l=1e9,i=1e6,s=1e3,c="operatingMargin",u="priceEarningsRatio",E="priceSalesRatio",h="priceBookValue",p="directYield",m="volatility",R="numberOfEmployees",T="revenue",d="revenuePerEmployee",A="revenuePerShare",f="totalAssets",_="earningsPerShare",S="netEarnings",O="numberOfShares",I="totalEquity",P="totalDebt",k="solidity",v="marketCap",y="year",g="id",N="lastPrice",L="currency",b="earningsBeforeInterestAndTax",C="changeValues",w="OLLE",D="returnOnEquity",B="returnOnCapitalEmployed",U="netAssetValue",M="profitFromPropertyManagementBeforeTax",Y="profitFromPropertyManagementBeforeTaxPerShare",j="price_profitFromPropertyManagementBeforeTax_ratio",V="price_profitFromPropertyManagementAfterTax_ratio",G="annualReportsTable",F="interimReportsTable",K="multipleStocksTable",x="quarter",H="year"},183:function(e,t,n){e.exports=n(410)},188:function(e,t,n){},189:function(e,t,n){},215:function(e,t){},217:function(e,t){},247:function(e,t){},248:function(e,t){},292:function(e,t){},294:function(e,t){},317:function(e,t){},410:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(182),l=n.n(o),i=(n(188),n(9)),s=n(10),c=n(12),u=n(11),E=n(13),h=(n(189),n(24)),p={minShare:20,maxShare:30,minNumberOfStocks:8,maxNumberOfStocks:12,minRatioOfEachShareInPortfolio:5,maxRatioOfEachShareInPortfolio:30},m=[{id:"1",name:"Basportf\xf6ljen",stocks:[],strategy:Object(h.a)({},p,{minShare:40,maxShare:60})},{id:"2",name:"Raketportf\xf6ljen",stocks:[],strategy:p}];function R(e){return e.stocks.reduce((function(e,t){return e+A(t)}),0)}function T(e,t){var n=R(e)/t*100;return n>=e.strategy.minShare&&n<=e.strategy.maxShare}function d(e){return e.stocks.length>=e.strategy.minNumberOfStocks&&e.stocks.length<=e.strategy.maxNumberOfStocks}function A(e){return e.amount*e.lastPrice+(e.cash?e.cash:0)}var f=n(1),_=n(105);function S(e){return new Promise((function(t,n){_({uri:"".concat(f.BASE_URL,"/stock/").concat(e)}).then((function(e){var n=JSON.parse(e);t(n)}))}))}function O(){return new Promise((function(e,t){var n=[];m.forEach((function(e){n.push(function(e){var t=e;return new Promise((function(n,r){var a=[];e.stocks.forEach((function(e){a.push(function(e){return new Promise((function(t,n){S(e.id).then((function(n){var r=Object(h.a)({},e,{},n);r=function(e){switch(e.currency){case"SEK":return e;case"USD":return Object(h.a)({},e,{currency:"SEK",lastPrice:e.lastPrice*f.exchangeRates.USD});case"DKK":return Object(h.a)({},e,{currency:"SEK",lastPrice:e.lastPrice*f.exchangeRates.DKK});case"EUR":return Object(h.a)({},e,{currency:"SEK",lastPrice:e.lastPrice*f.exchangeRates.EUR});default:return console.error("Missing currency: "+e.currency),e}}(r),t(r)}))}))}(e))})),Promise.all(a).then((function(e){t.stocks=e.sort((function(e,t){return A(t)-A(e)})),n(t)}))}))}(e))})),Promise.all(n).then((function(t){e(t)}))}))}var I=n(1),P=I.YEAR,k=I.BILLION,v=I.MILLION,y=I.THOUSAND;function g(e,t){return N(e)?L(t):t}function N(e){switch(e){case P:case"_id":return!1;default:return!0}}function L(e){if(isNaN(e)||"number"!==typeof e)return e;var t="",n=e<0;return n&&(e*=-1),t=e>=k?e.toPrecision(3)/k+" miljarder":e>=v?e.toPrecision(3)/v+" miljoner":e>=y?function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t.join(".")}(e.toFixed(0)):e.toPrecision(3).replace(".00e+3"," 000"),n&&(t="-"+t),t}var b=n(69);function C(e){var t=e.portfolioData,n=e.totalPortfolioValue,r=R(t)/n*100;return a.a.createElement("tr",{key:t.id},a.a.createElement("td",null,t.name),a.a.createElement("td",{className:b({good:T(t,n),bad:!T(t,n)})},r.toFixed(2),"%"),a.a.createElement("td",{className:b({good:d(t),bad:!d(t)})},t.stocks.length))}function w(e){var t=e.portfolioData,n=t.strategy,r=n.minRatioOfEachShareInPortfolio,o=n.maxRatioOfEachShareInPortfolio;return a.a.createElement("div",null,a.a.createElement("h2",null,t.name),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{width:"10%"},"ID"),a.a.createElement("th",{width:"30%"},"Aktie"),a.a.createElement("th",{width:"20%"},"Andel av portf\xf6lj"),a.a.createElement("th",{width:"30%"},"Bransch"),a.a.createElement("th",{width:"10%"},"P/E"),a.a.createElement("th",{width:"10%"},"Aktiekurs (SEK)"))),a.a.createElement("tbody",null,t.stocks.map((function(e){return a.a.createElement(B,{stock:e,portfolioValue:R(t),minRatio:r,maxRatio:o,key:e.id})})))))}function D(e,t,n){return e>=t&&e<=n}function B(e){var t=e.stock,n=e.portfolioValue,r=e.minRatio,o=e.maxRatio,l=A(t)/n*100;return a.a.createElement("tr",{key:t.id},a.a.createElement("td",null,t.id),a.a.createElement("td",null,t.name),a.a.createElement("td",{className:b({good:D(l,r,o),bad:!D(l,r,o)})},l.toFixed(2),"%"),a.a.createElement("td",null,t.sector),a.a.createElement("td",null,t[f.PRICE_EARNINGS_RATIO]),a.a.createElement("td",null,g(f.LAST_PRICE,t[f.LAST_PRICE])))}var U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={portfolios:[],error:null},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.setState({portfolios:t})})).catch((function(t){console.error(t),e.setState({error:t.message})}))}},{key:"getTotalPortfolioValue",value:function(){return this.state.portfolios.reduce((function(e,t){return e+R(t)}),0)}},{key:"render",value:function(){var e=this;if(null!=this.state.error)return a.a.createElement("p",null,this.state.error);var t=function(e){var t={};return e.forEach((function(e){e.stocks.forEach((function(e){t[e.sector]||(t[e.sector]=0),t[e.sector]+=A(e)}))})),t}(this.state.portfolios),n=[];return Object.keys(t).forEach((function(r){n.push({name:r,value:t[r]/e.getTotalPortfolioValue()*100})})),n=n.sort((function(e,t){return e.value<t.value?1:t.value<e.value?-1:0})),a.a.createElement("div",null,a.a.createElement("h1",null,"Alla portf\xf6ljer"),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{width:"40%"},"Portf\xf6lj"),a.a.createElement("th",{width:"30%"},"Andel"),a.a.createElement("th",{width:"30%"},"Antal innehav"))),a.a.createElement("tbody",null,this.state.portfolios.map((function(t){return a.a.createElement(C,{portfolioData:t,totalPortfolioValue:e.getTotalPortfolioValue(),key:t.id})})))),a.a.createElement("h2",null,"Branschf\xf6rdelning"),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{width:"40%"},"Bransch"),a.a.createElement("th",{width:"30%"},"Andel"))),a.a.createElement("tbody",null,n.map((function(e){return a.a.createElement("tr",null,a.a.createElement("td",null,e.name),a.a.createElement("td",null,e.value.toFixed(2),"%"))})))),this.state.portfolios.map((function(e){return a.a.createElement(w,{portfolioData:e,key:e.id})})))}}]),t}(a.a.Component),M=n(103),Y=n(44);function j(e){switch(e){case f.PRICE_EARNINGS_RATIO:return"P/E";case f.PRICE_SALES_RATIO:return"P/S";case f.DIRECT_YIELD:return"Direktavkastning (%)";case f.VOLATILITY:return"Volatilitet";case f.NUMBER_OF_EMPLOYEES:return"Anst\xe4llda";case f.REVENUE:return"Oms\xe4ttning";case f.REVENUE_PER_EMPLOYEE:return"Oms\xe4ttning / anst\xe4lld";case f.REVENUE_PER_SHARE:return"Oms\xe4ttning / aktie";case f.OPERATING_MARGIN:return"R\xf6relsemarginal (%)";case f.TOTAL_ASSETS:return"Tillg\xe5ngar";case f.TOTAL_EQUITY:return"Eget kapital";case f.TOTAL_DEBT:return"Skuld";case f.EARNINGS_PER_SHARE:return"EPS";case f.PRICE_BOOK_VALUE:return"P/B";case f.SOLIDITY:return"Soliditet (%)";case f.MARKET_CAP:return"B\xf6rsv\xe4rde";case f.YEAR:return"\xc5r";case f.ID:return"ID";case f.EBIT:return"EBIT";case f.NET_EARNINGS:return"Vinst";case f.RETURN_ON_EQUITY:return"ROE (%)";case f.RETURN_ON_CAPITAL_EMPLOYED:return"ROCE (%)";case f.NET_ASSET_VALUE:return"Substansv\xe4rde";case f.OLLE:return"OLLE";case f.LAST_PRICE:return"Aktiekurs";case f.PROFIT_FROM_PROPERTY_MANAGEMENT_BEFORE_TAX:return"F\xf6rvaltningsresultat";case f.PFPMBF_PER_SHARE:return"EPS (f\xf6re skatt)";case f.PRICE_PFPMBT_RATIO:return"P/FV";case f.PRICE_PFPMAT_RATIO:return"P/FV (efter skatt)";default:return""}}function V(e){switch(e){case f.PRICE_EARNINGS_RATIO:return"Aktiekurs/vinst per aktie";case f.PRICE_SALES_RATIO:return"Aktiekurs/oms\xe4ttning per aktie";case f.DIRECT_YIELD:return"Direktavkastning (%)";case f.VOLATILITY:return"Volatilitet (%)";case f.NUMBER_OF_EMPLOYEES:return"Antal anst\xe4llda";case f.REVENUE:return"Oms\xe4ttning";case f.REVENUE_PER_EMPLOYEE:return"Oms\xe4ttning / anst\xe4lld";case f.REVENUE_PER_SHARE:return"Oms\xe4ttning / aktie";case f.OPERATING_MARGIN:return"R\xf6relsemarginal (%)";case f.TOTAL_ASSETS:return"Tillg\xe5ngar";case f.TOTAL_EQUITY:return"Eget kapital";case f.TOTAL_DEBT:return"Skuld";case f.EARNINGS_PER_SHARE:return"Vinst per aktie";case f.PRICE_BOOK_VALUE:return"Aktiekurs/eget kapital per aktie";case f.SOLIDITY:return"Soliditet (%)";case f.MARKET_CAP:return"B\xf6rsv\xe4rde";case f.YEAR:return"\xc5r";case f.ID:return"ID";case f.EBIT:return"Vinst f\xf6re skatt";case f.NET_EARNINGS:return"Nettoresultat";case f.RETURN_ON_EQUITY:return"R\xe4ntabilitet p\xe5 eget kapital (%)";case f.RETURN_ON_CAPITAL_EMPLOYED:return"R\xe4ntabilitet p\xe5 sysselsatt kapital (%)";case f.NET_ASSET_VALUE:return"Substansv\xe4rde (p\xe5 b\xf6rsnoterade innehav)";case f.OLLE:return"Aktiekurs/senaste kvartalsoms\xe4ttningen per aktie x 4";case f.LAST_PRICE:return"Aktiekurs (max 4h gammal)";case f.PFPMBF_PER_SHARE:return"EPS baserat p\xe5 f\xf6rvaltningsresultat f\xf6re skatt";case f.PRICE_PFPMBT_RATIO:return"Aktiekurs / f\xf6rvaltningsresultat f\xf6re skatt (per aktie)";case f.PRICE_PFPMAT_RATIO:return"Aktiekurs / f\xf6rvaltningsresultat ber\xe4knat med en schablonskatt p\xe5 25%";case f.PROFIT_FROM_PROPERTY_MANAGEMENT_BEFORE_TAX:return"Hyresint\xe4kter - driftskostnader - r\xe4ntekostnader";default:return""}}var G=function(e){var t=e.style,n=void 0===t?{}:t,r=e.fill,o=void 0===r?"#000":r,l=e.width,i=void 0===l?"100%":l,s=e.className,c=void 0===s?"":s,u=e.viewBox,E=void 0===u?"0 0 576 512":u;return a.a.createElement("svg",{width:i,style:n,height:i,viewBox:E,xmlns:"http://www.w3.org/2000/svg",className:"svg-icon ".concat(c||""),xmlnsXlink:"http://www.w3.org/1999/xlink"},a.a.createElement("path",{fill:o,d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}))};function F(e){return e.directYield>q()}function K(e){return e.directYield>1.25*q()}function x(e){var t=e.priceEarningsRatio,n=e.directYield;return!(t<=0)&&1/(n/100)>=t}function H(e){var t=e.priceEarningsRatio,n=e.directYield;return x(e)&&1/(n/100)>=2*t}function Q(e){return e.priceEarningsRatio<=0}function q(){return 4.8}function W(e){return e.volatility<=21.6*.75}function J(e){return e.volatility<=10.8}function X(e){return e.volatility>27}function z(e){return e.volatility>41.04}var $=n(69);function Z(e,t){switch(e){case"priceEarningsRatio":return $({good:x(t),veryGood:H(t),veryBad:Q(t)});case"directYield":return $({good:F(t),veryGood:K(t)});case"volatility":return $({good:W(t),veryGood:J(t),bad:X(t),veryBad:z(t)});default:return $({})}}var ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).formatDate=function(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+" ."},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(){this.props.showSingleStock(this.props.stockData.id,this.props.columnsToShow)}},{key:"handleClickReport",value:function(e){this.props.handleClickReport(e)}},{key:"renderMainColumn",value:function(){var e=this,t=this.props,n=t.type,r=t.stockData,o=t.owned,l=t.reportType;switch(n){case f.ANNUAL_REPORTS_TABLE:return a.a.createElement("td",null,a.a.createElement("a",{href:"#",onClick:function(){return e.handleClickReport(r)}},r.year));case f.INTERIM_REPORTS_TABLE:return a.a.createElement("td",null,a.a.createElement("a",{href:"#",onClick:function(){return e.handleClickReport(r)}},r.year," ",r.period));default:return a.a.createElement("td",{className:$({owned:o})},a.a.createElement(Y.a,null),a.a.createElement("a",{href:"#",onClick:function(){return e.handleClick()}},r.name),"SEK"===r.currency?"":" ("+r.currency+")",this.shouldShowOldReportWarning(r.reportDate,l)?a.a.createElement("a",{"data-tip":"Avser rapport fr\xe5n "+this.formatDate(new Date(r.reportDate))},a.a.createElement(G,{width:20,fill:"#fa2"})):"")}}},{key:"shouldShowOldReportWarning",value:function(e,t){if(!e)return!1;var n=(new Date).getTime(),r=new Date(e).getTime();return t===f.ANNUAL_REPORT?n-r>315576e5:n-r>78894e5}},{key:"renderStockData",value:function(e){var t=this.props,n=t.stockData;switch(t.type){case f.ANNUAL_REPORTS_TABLE:case f.INTERIM_REPORTS_TABLE:var r=g(e,n[e]);if(!n.changeValues)return r;var a=n.changeValues[e];return!a||isNaN(a)?r:r+" ("+(n.changeValues[e]>0?"+":"")+n.changeValues[e]+"%)";default:return g(e,n[e])}}},{key:"render",value:function(){var e=this,t=this.props,n=t.stockData,r=t.columnsToShow;return a.a.createElement("tr",{key:n.id},this.renderMainColumn(),r.map((function(t){return a.a.createElement("td",{width:"15%",key:t,className:Z(t,n)},e.renderStockData(t))})))}}]),t}(a.a.Component),te=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={sortKey:f.PRICE_EARNINGS_RATIO},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"sortBy",value:function(e){this.setState({sortKey:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.stocks,r=t.ownedStocks,o=t.type,l=t.reportType,i=this.state.sortKey;i&&n.sort((function(e,t){return e[i]<t[i]?-1:1}));var s=this.props.columnsToShow;return l===f.QUARTERLY_REPORT&&(s=s.concat([f.OLLE])),a.a.createElement(a.a.Fragment,null,a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{width:"40%",onClick:function(){return e.sortBy("name")}},function(e){switch(e){case f.ANNUAL_REPORTS_TABLE:return j(f.YEAR);case f.INTERIM_REPORTS_TABLE:return"Period";default:return"Aktie"}}(o)),s.map((function(t){return a.a.createElement("th",{width:"15%",key:t,"data-tip":V(t),onClick:function(){return e.sortBy(t)}},j(t))})))),a.a.createElement("tbody",null,n.map((function(t){var n=function(e,t){var n=!1;return t.forEach((function(t){t.id!==e||(n=!0)})),n}(t.id,r);return a.a.createElement(ee,{stockData:l===f.QUARTERLY_REPORT?Object(h.a)({},t,{},t.latestInterimReport):Object(h.a)({},t,{},t.latestAnnualReport),key:t.id,owned:n,columnsToShow:s,showSingleStock:e.props.showSingleStock,handleClickReport:e.props.handleClickReport,type:o,reportType:l})})))),a.a.createElement(Y.a,null))}}]),t}(a.a.PureComponent);te.defaultProps={type:f.MULTIPLE_STOCKS_TABLE,columnsToShow:[f.ID,f.LAST_PRICE,f.PRICE_EARNINGS_RATIO,f.DIRECT_YIELD,f.VOLATILITY]};var ne=te,re=n(70),ae=n(59),oe=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(c.a)(this,Object(u.a)(t).call(this,e)),e.reportData?n.state=e.reportData:n.state={currency:"SEK",multiplier:"NONE",period:"YEAR",year:2020,revenue:0,earningsBeforeInterestAndTax:0,netEarnings:0,totalAssets:0,totalEquity:0,totalDebt:0,numberOfShares:0,numberOfEmployees:0,reportDate:"",profitFromPropertyManagementBeforeTax:0},n.handleInputChange=n.handleInputChange.bind(Object(ae.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ae.a)(n)),n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;this.setState(Object(re.a)({},r,n))}},{key:"multiply",value:function(e){if(!this.state.multiplier||""===this.state.multiplier)return 1*e;switch(this.state.multiplier){case"MILLION":return e*f.MILLION;case"BILLION":return e*f.BILLION;case"THOUSAND":return e*f.THOUSAND;case"NONE":default:return 1*e}}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n,r,a={currency:this.state.currency,year:1*this.state.year,revenue:this.multiply(this.state.revenue),earningsBeforeInterestAndTax:this.multiply(this.state.earningsBeforeInterestAndTax),netEarnings:this.multiply(this.state.netEarnings),numberOfShares:1*this.state.numberOfShares,numberOfEmployees:1*this.state.numberOfEmployees,reportDate:new Date(this.state.reportDate)};"YEAR"!==this.state.period&&(a.period=this.state.period),0!==this.state.totalAssets&&(a.totalAssets=this.multiply(this.state.totalAssets)),0!==this.state.totalEquity&&(a.totalEquity=this.multiply(this.state.totalEquity)),0!==this.state.totalDebt&&(a.totalDebt=this.multiply(this.state.totalDebt)),0!==this.state.profitFromPropertyManagementBeforeTax&&(a.profitFromPropertyManagementBeforeTax=this.multiply(this.state.profitFromPropertyManagementBeforeTax)),(n=this.props.id,r=a,new Promise((function(e,t){_({method:"PUT",uri:"".concat(f.BASE_URL,"/stock/").concat(n,"/reports"),body:r,json:!0}).then((function(t){e(t)}))}))).then((function(){t.props.reportSaved()}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h2",null,this.props.stockDetails.name," \u2013 L\xe4gg till rapport"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("label",null,"\xc5r:",a.a.createElement("input",{name:"year",type:"number",value:this.state.year,onChange:this.handleInputChange})),a.a.createElement("br",null),a.a.createElement("label",null,"Kvartal:",a.a.createElement("select",{name:"period",value:this.state.period,onChange:this.handleInputChange},a.a.createElement("option",{value:"YEAR"},"Hel\xe5r"),a.a.createElement("option",{value:"Q1"},"Q1"),a.a.createElement("option",{value:"Q2"},"Q2"),a.a.createElement("option",{value:"Q3"},"Q3"),a.a.createElement("option",{value:"Q4"},"Q4"))),a.a.createElement("br",null),a.a.createElement("label",null,"Rapportdatum:",a.a.createElement("input",{name:"reportDate",type:"string",value:this.state.reportDate,onChange:this.handleInputChange})),a.a.createElement("br",null),a.a.createElement("label",null,"Antal aktier (samtliga aktieslag):",a.a.createElement("input",{name:"numberOfShares",type:"number",value:this.state.numberOfShares,onChange:this.handleInputChange})),a.a.createElement("h3",null,"R\xe4kenskaper"),a.a.createElement("label",null,"Valuta:",a.a.createElement("select",{name:"multiplier",value:this.state.multiplier,onChange:this.handleInputChange},a.a.createElement("option",{value:"NONE"}),a.a.createElement("option",{value:"THOUSAND"},"Tusen"),a.a.createElement("option",{value:"MILLION"},"Miljoner"),a.a.createElement("option",{value:"BILLION"},"Miljarder")),a.a.createElement("select",{name:"currency",value:this.state.currency,onChange:this.handleInputChange},a.a.createElement("option",{value:"SEK"},"SEK"),a.a.createElement("option",{value:"EUR"},"EUR"),a.a.createElement("option",{value:"USD"},"USD"),a.a.createElement("option",{value:"DKK"},"DKK"))),a.a.createElement("br",null),a.a.createElement("label",null,"Oms\xe4ttning (revenue):",a.a.createElement("input",{name:"revenue",type:"number",value:this.state.revenue,onChange:this.handleInputChange})),a.a.createElement("br",null),a.a.createElement("label",null,"R\xf6relseresultat (EBIT):",a.a.createElement("input",{name:"earningsBeforeInterestAndTax",type:"number",value:this.state.earningsBeforeInterestAndTax,onChange:this.handleInputChange})),a.a.createElement("br",null),a.a.createElement("label",null,"Vinst (Net earnings):",a.a.createElement("input",{name:"netEarnings",type:"number",value:this.state.netEarnings,onChange:this.handleInputChange})),a.a.createElement("br",null),a.a.createElement("label",null,"Tillg\xe5ngar (Total assets):",a.a.createElement("input",{name:"totalAssets",type:"number",value:this.state.totalAssets,onChange:this.handleInputChange})),a.a.createElement("br",null),a.a.createElement("label",null,"Eget kapital (Total equity):",a.a.createElement("input",{name:"totalEquity",type:"number",value:this.state.totalEquity,onChange:this.handleInputChange})),a.a.createElement("br",null),a.a.createElement("label",null,"Skuld (Total debt):",a.a.createElement("input",{name:"totalDebt",type:"number",value:this.state.totalDebt,onChange:this.handleInputChange})),a.a.createElement("br",null),a.a.createElement("h5",null,"Branschspecifika r\xe4kenskaper"),a.a.createElement("label",null,"F\xf6rvaltningsresultat:",a.a.createElement("input",{name:"profitFromPropertyManagementBeforeTax",type:"number",value:this.state.profitFromPropertyManagementBeforeTax,onChange:this.handleInputChange})),a.a.createElement("h3",null,"Annan info"),a.a.createElement("label",null,"Antal anst\xe4llda:",a.a.createElement("input",{name:"numberOfEmployees",type:"number",value:this.state.numberOfEmployees,onChange:this.handleInputChange})),a.a.createElement("br",null),a.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(a.a.Component),le=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={stocksDetails:null,error:null,showReportInput:!1,reportData:null},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;S(this.props.id).then((function(t){e.setState({stockDetails:t})}))}},{key:"getColumnsToShow",value:function(){var e=this.props.columnsToShow.filter((function(e){return e!==f.PRICE_EARNINGS_RATIO&&e!==f.VOLATILITY&&e!==f.DIRECT_YIELD&&e!==f.MARKET_CAP&&e!==f.PRICE_BOOK_VALUE&&e!==f.PRICE_SALES_RATIO&&e!==f.NET_ASSET_VALUE})),t=[f.REVENUE,f.EBIT,f.NET_EARNINGS,f.TOTAL_ASSETS,f.TOTAL_EQUITY,f.TOTAL_DEBT];return Object(M.a)(new Set([].concat(Object(M.a)(e),t)))}},{key:"renderAnnualReports",value:function(){var e=this.state.stockDetails;return e.annualReports?a.a.createElement("div",null,a.a.createElement("h2",null,"\xc5rsrapporter"),a.a.createElement(ne,{type:f.ANNUAL_REPORTS_TABLE,stocks:e.annualReports,ownedStocks:[],columnsToShow:this.getColumnsToShow(),handleClickReport:this.handleClickReport.bind(this)})):a.a.createElement("div",null)}},{key:"renderInterimReports",value:function(){var e=this.state.stockDetails;return e.interimReports?a.a.createElement("div",null,a.a.createElement("h2",null,"Kvartalsrapporter"),a.a.createElement(ne,{type:f.INTERIM_REPORTS_TABLE,stocks:e.interimReports,ownedStocks:[],columnsToShow:this.getColumnsToShow(),handleClickReport:this.handleClickReport.bind(this)})):a.a.createElement("div",null)}},{key:"handleClickReport",value:function(e){this.setState({showReportInput:!0,reportData:e})}},{key:"reportSaved",value:function(){this.setState({showReportInput:!1,reportData:null})}},{key:"renderInputSection",value:function(){return this.props.id?a.a.createElement("div",null,a.a.createElement(oe,{id:this.props.id,stockDetails:this.state.stockDetails,reportData:this.state.reportData,reportSaved:this.reportSaved.bind(this)})):a.a.createElement("div",null)}},{key:"renderNewReportButton",value:function(){var e=this;return a.a.createElement("button",{onClick:function(){e.setState({showReportInput:!0,reportData:null})}},"New Report")}},{key:"render",value:function(){if(null!=this.state.error)return a.a.createElement("p",null,this.state.error);var e=this.state,t=e.stockDetails,n=e.showReportInput;return t?n?this.renderInputSection():a.a.createElement("div",null,a.a.createElement("h1",null,t.name),this.renderAnnualReports(),this.renderInterimReports(),a.a.createElement("hr",null),this.renderNewReportButton()):a.a.createElement("div",null)}}]),t}(a.a.Component),ie=n(105);var se=n(69),ce=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={stocks:[],ownedStocks:[],error:null},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){this.props.category!==e.category&&this.loadData()}},{key:"loadData",value:function(){var e,t=this;(e=this.props.category,new Promise((function(t,n){ie("".concat(f.BASE_URL,"/category/").concat(e)).then((function(e){var n=JSON.parse(e);t(n.stocks)}))}))).then((function(e){t.setState({stocks:e})})).catch((function(e){console.error(e),t.setState({error:e.message})})),new Promise((function(e,t){var n=[];O().then((function(t){t.forEach((function(e){n=n.concat(e.stocks)})),e(n)}))})).then((function(e){t.setState({ownedStocks:e})}))}},{key:"renderButtons",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,"Visa senaste:",a.a.createElement("button",{onClick:function(){e.props.setReportType(f.ANNUAL_REPORT)},className:se({active:this.props.reportType===f.ANNUAL_REPORT}),"data-tip":"Visa data fr\xe5n senaste \xe5rsredovisningen"},"Hel\xe5r"),a.a.createElement("button",{onClick:function(){e.props.setReportType(f.QUARTERLY_REPORT)},className:se({active:this.props.reportType===f.QUARTERLY_REPORT}),"data-tip":"Visa data fr\xe5n senaste kvartalsrapporten"},"Kvartal"),a.a.createElement(Y.a,null))}},{key:"render",value:function(){return null!=this.state.error?a.a.createElement("p",null,this.state.error):a.a.createElement("div",null,a.a.createElement("h1",null,this.props.title),this.renderButtons(),a.a.createElement(ne,{stocks:this.state.stocks,ownedStocks:this.state.ownedStocks,showSingleStock:this.props.showSingleStock,columnsToShow:this.props.columnsToShow,reportType:this.props.reportType}))}}]),t}(a.a.Component),ue=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={stocks:[],ownedStocks:[],error:null,columnsToShow:[f.LAST_PRICE,f.PRICE_EARNINGS_RATIO,f.DIRECT_YIELD,f.VOLATILITY,f.PRICE_BOOK_VALUE,f.EARNINGS_PER_SHARE,f.REVENUE_PER_EMPLOYEE,f.REVENUE_PER_SHARE,f.OPERATING_MARGIN,f.SOLIDITY,f.PRICE_SALES_RATIO,f.MARKET_CAP,f.RETURN_ON_EQUITY,f.RETURN_ON_CAPITAL_EMPLOYED]},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(ce,{category:"forest",title:"Skog",columnsToShow:this.state.columnsToShow,reportType:this.props.reportType,setReportType:this.props.setReportType,showSingleStock:this.props.showSingleStock})}}]),t}(a.a.Component),Ee=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={stocks:[],ownedStocks:[],error:null,columnsToShow:[f.LAST_PRICE,f.PRICE_EARNINGS_RATIO,f.DIRECT_YIELD,f.NET_EARNINGS,f.EBIT,f.EARNINGS_PER_SHARE,f.TOTAL_ASSETS,f.PRICE_BOOK_VALUE,f.SOLIDITY,f.RETURN_ON_EQUITY,f.RETURN_ON_CAPITAL_EMPLOYED,f.MARKET_CAP,f.NET_ASSET_VALUE]},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(ce,{category:"invest",title:"Investmentbolag",columnsToShow:this.state.columnsToShow,reportType:this.props.reportType,setReportType:this.props.setReportType,showSingleStock:this.props.showSingleStock})}}]),t}(a.a.Component),he=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={stocks:[],ownedStocks:[],error:null,columnsToShow:[f.LAST_PRICE,f.PRICE_EARNINGS_RATIO,f.DIRECT_YIELD,f.VOLATILITY,f.PRICE_BOOK_VALUE,f.EARNINGS_PER_SHARE,f.REVENUE_PER_EMPLOYEE,f.REVENUE_PER_SHARE,f.OPERATING_MARGIN,f.SOLIDITY,f.PRICE_SALES_RATIO,f.MARKET_CAP,f.RETURN_ON_EQUITY]},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(ce,{category:"bank",title:"Bank",columnsToShow:this.state.columnsToShow,reportType:this.props.reportType,setReportType:this.props.setReportType,showSingleStock:this.props.showSingleStock})}}]),t}(a.a.Component),pe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={stocks:[],ownedStocks:[],error:null,columnsToShow:[f.LAST_PRICE,f.PRICE_EARNINGS_RATIO,f.DIRECT_YIELD,f.VOLATILITY,f.PRICE_BOOK_VALUE,f.EARNINGS_PER_SHARE,f.REVENUE_PER_EMPLOYEE,f.REVENUE_PER_SHARE,f.OPERATING_MARGIN,f.SOLIDITY,f.PRICE_SALES_RATIO,f.MARKET_CAP,f.RETURN_ON_EQUITY,f.RETURN_ON_CAPITAL_EMPLOYED]},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(ce,{category:"space",title:"Rymdteknik",columnsToShow:this.state.columnsToShow,reportType:this.props.reportType,setReportType:this.props.setReportType,showSingleStock:this.props.showSingleStock})}}]),t}(a.a.Component),me=n(69),Re=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={activePage:"BEST_YIELD_PAGE",activeStock:null,columnsToShow:[],reportType:f.ANNUAL_REPORT},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"renderActivePage",value:function(){if(this.state.activeStock)return a.a.createElement(le,{id:this.state.activeStock,columnsToShow:this.state.columnsToShow});var e={reportType:this.state.reportType,setReportType:this.setReportType.bind(this),showSingleStock:this.showSingleStock.bind(this)};switch(this.state.activePage){case"PORTFOLIO_PAGE":return a.a.createElement(U,{showSingleStock:this.showSingleStock.bind(this)});case"BEST_YIELD_PAGE":return a.a.createElement(ce,Object.assign({category:"best-yield",title:"Intressanta utdelningsaktier"},e));case"BLUE_CHIP_PAGE":return a.a.createElement(ce,Object.assign({category:"blue-chip",title:"Intressanta basaktier"},e));case"INDUSTRY_PAGE":return a.a.createElement(ce,Object.assign({category:"industry",title:"Verkstad"},e));case"FOREST_PAGE":return a.a.createElement(ue,e);case"INVEST_PAGE":return a.a.createElement(Ee,e);case"REAL_ESTATE_PAGE":return a.a.createElement(ce,Object.assign({category:"realEstate",title:"Fastighetsbolag"},e,{columnsToShow:[f.LAST_PRICE,f.PRICE_EARNINGS_RATIO,f.DIRECT_YIELD,f.VOLATILITY,f.SOLIDITY,f.MARKET_CAP,f.PFPMBF_PER_SHARE,f.PRICE_PFPMBT_RATIO,f.PRICE_PFPMAT_RATIO]}));case"BANK_PAGE":return a.a.createElement(he,e);case"TECH_PAGE":return a.a.createElement(ce,Object.assign({category:"tech",title:"Teknik"},e,{columnsToShow:[f.LAST_PRICE,f.PRICE_EARNINGS_RATIO,f.DIRECT_YIELD,f.VOLATILITY,f.PRICE_BOOK_VALUE,f.EARNINGS_PER_SHARE,f.REVENUE_PER_EMPLOYEE,f.REVENUE_PER_SHARE,f.OPERATING_MARGIN,f.SOLIDITY,f.PRICE_SALES_RATIO,f.MARKET_CAP,f.RETURN_ON_EQUITY,f.RETURN_ON_CAPITAL_EMPLOYED]}));case"SPACE_PAGE":return a.a.createElement(pe,e);default:return a.a.createElement("div",null)}}},{key:"renderButton",value:function(e,t){var n=this;return a.a.createElement("button",{onClick:function(){n.setState({activePage:t,activeStock:null})},className:me({active:this.state.activePage===t})},e)}},{key:"showSingleStock",value:function(e,t){this.setState({activeStock:e,columnsToShow:t})}},{key:"setReportType",value:function(e){this.setState({reportType:e})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"BisseNisse"),f.SHOW_PORTFOLIO&&this.renderButton("Portfolio","PORTFOLIO_PAGE"),this.renderButton("Utdelningsaktier","BEST_YIELD_PAGE"),this.renderButton("Basaktier","BLUE_CHIP_PAGE"),this.renderButton("Verkstad","INDUSTRY_PAGE"),this.renderButton("Skog","FOREST_PAGE"),this.renderButton("Investment","INVEST_PAGE"),this.renderButton("Fastigheter","REAL_ESTATE_PAGE"),this.renderButton("Bank","BANK_PAGE"),this.renderButton("Teknik","TECH_PAGE"),this.renderButton("Rymdteknik","SPACE_PAGE"),this.renderActivePage())}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[183,1,2]]]);
//# sourceMappingURL=main.09ba1090.chunk.js.map