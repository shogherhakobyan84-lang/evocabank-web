const LoansData = [
  {
    id: 1,
    title: "Անգրավ սպառողական վարկ",
    description: "Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ․ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։:",
    amount: "120 մլն. ֏",
    term: "240 ամիս",
    rate: "7.2%",
    detailsPath: "/loans/commercial-mortgage",
    image: "https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg"
  },
  {
    id: 2,
    title: "Ավտոմեքենայի ձեռքբերման նպատակով վարկ",
    description: "Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։",
    amount: "45 մլն. ֏",
    term: "240 ամիս",
    rate: "12%",
    detailsPath: "/loans/nmc-purchase",
    image: "https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg"
  },
  {
    id: 3,
    title: "Գույքի գրավով ապահովված վարկ",
    description: "Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։",
    amount: "45 մլն. ֏",
    term: "240 ամիս",
    rate: "12.5%",
    detailsPath: "/loans/nmc-construction",
    image: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg"
  },
  {
    id: 4,
    title: "Արևային կայանների ձեռք բերման վարկ EvocaPOWER",
    description: "Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից։ EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության։",
    amount: "15 մլն. ֏",
    term: "84 ամիս",
    rate: "12.5%",
    detailsPath: "/loans/nmc-renovation",
    image: "https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png"
  },
  {
    id: 5,
    title: "Ոսկու գրավով (լոմբարդային) վարկ",
    description: "Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։",
    amount: "27 մլն. ֏",
    term: "180 ամիս",
    rate: "6.9%",
    detailsPath: "/loans/young-family",
    image: "https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg"
  },
  {
    id: 6,
    title: "Տեղում Ապառիկ",
    description: "Ցանկանո՞ւմ ես ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից։ Օգտվիր Evoca-ի տեղում ապառիկից։",
    amount: "10 մլն. ֏",
    term: "36 ամիս",
    rate: "15%",
    detailsPath: "/loans/visa-infinite",
    image: "https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg"
  },
  {
    id: 7,
    title: "Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ",
    description: "Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ։",
    amount: "45 մլն. ֏",
    term: "120 ամիս",
    rate: "10%",
    detailsPath: "/loans/artsakh-mortgage",
    image: "https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg"
  },
  {
    id: 8,
    title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով",
    description: "Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ։",
    amount: "10 մլն. ֏",
    term: "60 ամիս",
    rate: "13%",
    detailsPath: "/loans/artsakh-renovation",
    image: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg"
  },
  {
    id: 9,
    title: "Action",
    description: "Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի։",
    amount: "4 մլն. ֏",
    term: "120 ամիս",
    rate: "9%",
    detailsPath: "/loans/student-loan",
    image: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png"
  },
  {
    id: 10,
    title: "Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին",
    description: "Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:",
    amount: "21 մլն. ֏",
    term: "120 ամիս",
    rate: "13%",
    detailsPath: "/loans/border-support",
    image: "https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png"
  },
  {
    id: 11,
    title: "Հողամասի ձեռքբերման վարկ",
    description: "Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար։ Դու արդեն գտել ես այն։",
    amount: "80 մլն. ֏",
    term: "240 ամիս",
    rate: "11%",
    detailsPath: "/loans/primary-market",
    image: "https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg"
  },
  {
    id: 12,
    title: "Միկրովերանորոգման վարկ Բանկի ռեսուրսներով",
    description: "Պլանավորո՞ւմ ես բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից։",
    amount: "60 մլն. ֏",
    term: "240 ամիս",
    rate: "12%",
    detailsPath: "/loans/secondary-market",
    image: "https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png"
  },
  {
    id: 13,
    title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ",
    description: "Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:",
    amount: "50 մլն. ֏",
    term: "180 ամիս",
    rate: "12.5%",
    detailsPath: "/loans/house-construction",
    image: "https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png"
  },
  {
    id: 14,
    title: "Վճարային քարտով օվերդրաֆտ (վարկային քարտ)",
    description: "Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:",
    amount: "20 մլն. ֏",
    term: "120 ամիս",
    rate: "13%",
    detailsPath: "/loans/home-renovation",
    image: "https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png"
  },
  {
    id: 15,
    title: "Անհատական վարկ «Ներդրումային»",
    description: "Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։",
    amount: "30 մլն. ֏",
    term: "120 ամիս",
    rate: "14%",
    detailsPath: "/loans/property-backed",
    image: "https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png"
  },
  {
    id: 16,
    title: "Ավտոկայանատեղիի ձեռքբերման վարկ",
    description: "Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:",
    amount: "ավանդի 95%-ը",
    term: "60 ամիս",
    rate: "ավանդ + 2%",
    detailsPath: "/loans/deposit-backed",
    image: "https://www.evoca.am/images-cache/loans/1/17419413852947/560x400.jpg"
  },
  {
    id: 17,
    title: "Հեծանիվի ձեռքբերման վարկ",
    description: "Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ։",
    amount: "25 մլն. ֏",
    term: "84 ամիս",
    rate: "13.5%",
    downPayment: "10%",
    detailsPath: "/loans/car-loan-new",
    image: "https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png"
  },
  {
    id: 18,
    title: "Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ",
    description: "Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։",
    amount: "15 մլն. ֏",
    term: "60 ամիս",
    rate: "15%",
    downPayment: "20%",
    detailsPath: "/loans/car-loan-used",
    image: "https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png"
  },
  {
    id: 19,
    title: "Վերանորոգման վարկ EvocaHOME",
    description: "Ցանկանո՞ւմ ես վերանորոգել բնակարանդ կամ պլանավորու՞մ ես գնել նոր կահույք։ Evoca-ի կողմից առաջարկվող նոր օվերդրաֆտի միջոցով դու կստեղծես քո երազանքների բնակարանը՝ ամենահարմար պայմաններով։",
    amount: "5 մլն. ֏",
    term: "48 ամիս",
    rate: "16%",
    detailsPath: "/loans/express-consumer",
    image: "https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png"
  },
  {
    id: 20,
    title: "Դրամական միջոցների գրավով ապահովված անհատական վարկ",
    description: "Ստացիր վարկ՝ գրավադրելով քո ավանդը կամ պարտատոմսը՝ արագ, հեշտ և առանց ավելորդ ձևակերպումների։",
    amount: "10-ապատիկը",
    term: "36 ամիս",
    rate: "14%",
    detailsPath: "/loans/salary-overdraft",
    image: "https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg"
  },
  {
    id: 21,
    title: "Առևտրային հիփոթեքային վարկեր",
    description: "Բիզնեսն ընդլայնելու համար Ձեր ֆինանսական միջոցները բավարա՞ր չեն, եկե՛ք Evocabank։",
    amount: "10 մլն. ֏",
    term: "60 ամիս",
    rate: "11%",
    detailsPath: "/loans/energy-efficient",
    image: "https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg"
  },
  {
    id: 22,
    title: "ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր",
    description: "Evocabank-ն առաջարկում է Ազգային հիփոթեքային ընկերության ծրագրի շրջանակներում տրամադրվող բնակարանային հիփոթեքային վարկեր։",
    amount: "3 մլն. ֏",
    term: "36 ամիս",
    rate: "15%",
    detailsPath: "/loans/gold-backed",
    image: "https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg"
  },
  {
    id: 23,
    title: "ԱՀԸ-ի ծրագրով կառուցապատման վարկեր",
    description: "Կատարիր ներդրում քո բնակարանի էներգաարդյունավետ կառուցապատման մեջ և ստացիր հնարավորություն վճարել ավելի քիչ ծախսված էլեկտրաէներգիայի և գազի համար:",
    amount: "100 մլն. ֏",
    term: "120 ամիս",
    rate: "10.5%",
    detailsPath: "/loans/sme-loans",
    image: "https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png"
  },
  {
    id: 24,
    title: "ԱՀԸ-ի ծրագրով վերանորոգման վարկեր",
    description: "Կազմակերպիր քո բնակարանի էներգաարդյունավետ վերանորոգումն Evocabank-ի հետ։",
    amount: "50 մլն. ֏",
    term: "84 ամիս",
    rate: "9%",
    detailsPath: "/loans/agro-loans",
    image: "https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg"
  },
  {
    id: 25,
    title: "Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»",
    description: "Գնե՛ք Ձեր երազանքների բնակարանն Evocabank-ի օգնությամբ։ Մեզ հետ բնակարան գնելը հեշտ է, գործընթացն էլ՝ պարզեցված:",
    amount: "150 մլն. ֏",
    term: "60 ամիս",
    rate: "12%",
    detailsPath: "/loans/leasing",
    image: "https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg"
  },
  {
    id: 26,
    title: "Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ",
    description: "Ստացե՛ք օվերդրաֆտ Evocabank-ից Visa միջազգային վճարային համակարգի ամենաբարձր դասի Visa Infinite քարտով և կունենաք բանալի` դեպի արտոնությունների մեծ աշխարհ:",
    amount: "80 մլն. ֏",
    term: "12 ամիս",
    rate: "13%",
    detailsPath: "/loans/factoring",
    image: "https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg"
  },
  {
    id: 27,
    title: "Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին",
    description: "Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Ադրբեջանի կողմից 2020 թվականի սեպտեմբերի 27-ին սանձազերծված պատերազմի հետևանքով տեղահանված ընտանիքներին:",
    amount: "2 մլն. ֏",
    term: "36 ամիս",
    rate: "0%",
    detailsPath: "/loans/installment",
    image: "https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png"
  },
  {
    id: 28,
    title: "Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին",
    description: "Evocabank-ը տրամադրում է հիփոթեքային վարկ՝ բնակարանի կամ բնակելի տան վերանորոգման համար։",
    amount: "30 մլն. ֏",
    term: "84 ամիս",
    rate: "11%",
    downPayment: "10%",
    detailsPath: "/loans/ev-car-loan",
    image: "https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png"
  },
  {
    id: 29,
    title: "«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ",
    description: "Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի Ձեր փոխարեն։",
    amount: "10 մլն. ֏",
    term: "96 ամիս",
    rate: "10%",
    detailsPath: "/loans/solar-panels",
    image: "https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg"
  },
  {
    id: 30,
    title: "Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր",
    description: "Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր ՀՀ սահմանամերձ համայնքների բնակիչներին:",
    amount: "25 մլն. ֏",
    term: "60 ամիս",
    rate: "14.5%",
    detailsPath: "/loans/credit-line-property",
    image: "https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png"
  },
  {
    id: 31,
    title: "Evolution",
    description: "Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի քո փոխարեն։",
    amount: "5 մլն. ֏",
    term: "36 ամիս",
    rate: "15.5%",
    detailsPath: "/loans/credit-line-guarantee",
    image: "https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png"
  },
  {
    id: 32,
    title: "Հիփոթեքային վարկեր Զինծառայողներին",
    description: "Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով։ Հիփոթեքային վարկը տրամադրվում է պետական նպատակային ծրագրի շրջանակում։",
    amount: "3 մլն. ֏",
    term: "36 ամիս",
    rate: "16%",
    detailsPath: "/loans/micro-business",
    image: "https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png"
  }
];

export default LoansData;