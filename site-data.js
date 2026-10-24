// Default site content. The owner can change all of this in admin.html; her version is stored
// in Firebase (documents site/settings and site/texts) and replaces these defaults on the site.

(() => {
const TF = id => `https://cdn.thefork.com/tf-lab/image/upload/w_1400,c_fill,q_auto,f_auto/restaurant/1cd23ee8-12b8-44b9-af1c-58ead0e4c2b6/${id}.jpg`;

// Built-in photos the owner can pick from (she can also upload her own).
window.LC_PHOTOS = [
  { src: "img/salle-cheminee.jpg", name: "Зал с камином" },
  { src: "img/salle-lampe-cerise.jpg", name: "Лампа-вишня на стене" },
  { src: "img/ribs-ardoise.jpg", name: "Рёбрышки на доске" },
  { src: "img/ribs-bbq.jpg", name: "Рёбрышки BBQ с картошкой" },
  { src: "img/ribs-munster.jpg", name: "Рёбрышки с мюнстером" },
  { src: "img/jarret-ribs.jpg", name: "Рулька и рёбрышки" },
  { src: "img/onglet.jpg", name: "Стейк onglet" },
  { src: "img/tarte-flambee.jpg", name: "Тартфламбе классическая" },
  { src: "img/tarte-griottes.jpg", name: "Тартфламбе с вишней" },
  { src: "img/tarte-myrtilles.jpg", name: "Тартфламбе с черникой" },
  { src: "img/enseigne-nuit.jpg", name: "Вывеска вечером" },
  { src: "img/entree.jpg", name: "Вход в ресторан" },
  { src: TF("98346b73-aeb9-4971-aaee-bb8818e61800"), name: "Терраса" },
  { src: TF("7d54034c-b264-4084-9c62-0c910d4ffc26"), name: "Терраса с зонтами" },
  { src: TF("09de3592-9f15-4b86-b160-2654ab3b6bf3"), name: "Бар" },
  { src: TF("a44a6f3a-159a-47fd-839f-d72ccf3449fe"), name: "Зал с круглыми столами" },
  { src: TF("ff7f9ebf-2f78-428a-aa60-9f87bae7df3b"), name: "Зал, камень и дерево" }
];

const slots = [{ o: "11:30", c: "14:30" }, { o: "18:30", c: "22:30" }];
const closed = { open: false, slots: [] };
const open = () => ({ open: true, slots: slots.map(s => ({ ...s })) });

window.LC_SETTINGS_DEFAULT = {
  contact: {
    phone: "+33 3 88 47 83 86",
    email: "info@laceriseschilick.fr",
    address: "13 rue Neuve",
    city: "67300 Schiltigheim",
    facebook: "https://facebook.com/la.cerise.restaurant",
    booking: "https://www.thefork.fr/restaurant/la-cerise-r814532",
    maps: "https://maps.app.goo.gl/h8tjSW3DBJrBtbdF9"
  },
  // Index 0 = Sunday … 6 = Saturday. Times are Paris time.
  hours: [closed, closed, open(), open(), open(), open(), open()],
  ratings: { google: "4,8", googleCount: "241", fork: "9,4", forkCount: "729", food: "9,5", service: "9,6", ambiance: "9,2" },
  quotes: [
    { text: "Les ribs étaient particulièrement tendres et délicieux. La viande se détachait toute seule des os. Nous nous sommes régalés.", author: "Carine A." },
    { text: "Very nice and attentive service & chef; super dog-friendly and the food was amazing. Definitely coming back.", author: "Jan-Niklas K." },
    { text: "Cadre agréable et clair, plats du jour copieux et délicieux, personnel très à l'écoute des clients. Nous recommandons vivement.", author: "Mireille C." }
  ],
  photos: {
    hero: "img/salle-cheminee.jpg",
    about1: "img/salle-lampe-cerise.jpg",
    about2: "img/onglet.jpg",
    sp1: "img/ribs-bbq.jpg",
    sp2: "img/tarte-flambee.jpg",
    sp3: "img/tarte-griottes.jpg"
  },
  gallery: [
    "img/ribs-ardoise.jpg", "img/salle-lampe-cerise.jpg", "img/tarte-griottes.jpg", "img/onglet.jpg",
    "img/ribs-munster.jpg", "img/salle-cheminee.jpg", "img/tarte-myrtilles.jpg", "img/jarret-ribs.jpg",
    "img/enseigne-nuit.jpg", "img/tarte-flambee.jpg", TF("98346b73-aeb9-4971-aaee-bb8818e61800"),
    "img/entree.jpg", TF("09de3592-9f15-4b86-b160-2654ab3b6bf3")
  ],
  uploads: [] // the owner's own photos: [{ id, name }]
};

// Texts the owner can edit. "sec" groups them in the admin; "long" = multi-line field.
window.LC_TEXTS = [
  { sec: "Главный экран", k: "hero.eyebrow", label: "Надпись над названием", fr: "Schiltigheim · Près du vieux Schilick", en: "Schiltigheim · Next to old Schilick", de: "Schiltigheim · Nahe dem alten Schilick" },
  { sec: "Главный экран", k: "hero.tag", label: "Текст под названием", long: true, fr: "Ribs fondants, tartes flambées croustillantes et vins d'Alsace — servis avec le sourire sur notre terrasse ombragée.", en: "Melt-in-your-mouth ribs, crispy tartes flambées and Alsace wines — served with a smile on our shaded terrace.", de: "Zarte Spareribs, knusprige Flammkuchen und Elsässer Weine — mit einem Lächeln serviert auf unserer schattigen Terrasse." },

  { sec: "О ресторане", k: "about.eyebrow", label: "Маленький заголовок", fr: "Bienvenue", en: "Welcome", de: "Willkommen" },
  { sec: "О ресторане", k: "about.title", label: "Заголовок", fr: "Une adresse chaleureuse, une cuisine généreuse", en: "A warm place, generous food", de: "Ein herzlicher Ort, eine großzügige Küche" },
  { sec: "О ресторане", k: "about.text", label: "Текст о ресторане", long: true, fr: "À deux pas du vieux Schilick, La Cerise vous accueille dans une salle aux murs de pierre et de bois ou sur sa grande terrasse. Notre chef prépare des ribs tendres qui se détachent tout seuls de l'os, des tartes flambées bien garnies et des plats du jour copieux, avec des produits locaux.", en: "Just steps from old Schilick, La Cerise welcomes you in a stone-and-wood dining room or on its large terrace. Our chef cooks tender ribs that fall off the bone, well-topped tartes flambées and hearty dishes of the day, using local produce.", de: "Nur wenige Schritte vom alten Schilick empfängt Sie La Cerise in einem Gastraum aus Stein und Holz oder auf der großen Terrasse. Unser Koch bereitet zarte Ribs, die vom Knochen fallen, reich belegte Flammkuchen und üppige Tagesgerichte aus regionalen Produkten." },
  { sec: "О ресторане", k: "f1.t", label: "Преимущество 1 — заголовок", fr: "Terrasse ombragée", en: "Shaded terrace", de: "Schattige Terrasse" },
  { sec: "О ресторане", k: "f1.d", label: "Преимущество 1 — текст", fr: "Grands parasols, plantes et calme", en: "Big parasols, plants and calm", de: "Große Sonnenschirme, Pflanzen, Ruhe" },
  { sec: "О ресторане", k: "f2.t", label: "Преимущество 2 — заголовок", fr: "Produits locaux", en: "Local produce", de: "Regionale Produkte" },
  { sec: "О ресторане", k: "f2.d", label: "Преимущество 2 — текст", fr: "Bœuf Aubrac ou Salers, vins d'Alsace", en: "Aubrac or Salers beef, Alsace wines", de: "Aubrac- oder Salers-Rind, Elsässer Weine" },
  { sec: "О ресторане", k: "f3.t", label: "Преимущество 3 — заголовок", fr: "Accueil souriant", en: "Friendly welcome", de: "Herzlicher Empfang" },
  { sec: "О ресторане", k: "f3.d", label: "Преимущество 3 — текст", fr: "Service 9,6/10 sur TheFork", en: "Service rated 9.6/10 on TheFork", de: "Service 9,6/10 auf TheFork" },
  { sec: "О ресторане", k: "f4.t", label: "Преимущество 4 — заголовок", fr: "Chiens bienvenus", en: "Dogs welcome", de: "Hunde willkommen" },
  { sec: "О ресторане", k: "f4.d", label: "Преимущество 4 — текст", fr: "Familles et groupes aussi", en: "Families and groups too", de: "Familien und Gruppen auch" },

  { sec: "Фирменные блюда", k: "sp.title", label: "Заголовок раздела", fr: "Ce que nos clients adorent", en: "What our guests love", de: "Was unsere Gäste lieben" },
  { sec: "Фирменные блюда", k: "sp.lead", label: "Текст под заголовком", fr: "Trois raisons de revenir — et nos clients reviennent souvent.", en: "Three reasons to come back — and our guests often do.", de: "Drei Gründe wiederzukommen — und unsere Gäste kommen oft wieder." },
  { sec: "Фирменные блюда", k: "sp1.t", label: "Карточка 1 — название", fr: "Nos ribs", en: "Our ribs", de: "Unsere Ribs" },
  { sec: "Фирменные блюда", k: "sp1.d", label: "Карточка 1 — описание", long: true, fr: "Sept recettes : BBQ miel, piquant, munster, roquefort, ail & persil, moutarde à l'ancienne, curry.", en: "Seven recipes: honey BBQ, spicy, Munster, Roquefort, garlic & parsley, old-style mustard, curry.", de: "Sieben Rezepte: BBQ-Honig, scharf, Munster, Roquefort, Knoblauch & Petersilie, alter Senf, Curry." },
  { sec: "Фирменные блюда", k: "sp1.p", label: "Карточка 1 — цена", fr: "dès 22,5 €", en: "from €22.50", de: "ab 22,5 €" },
  { sec: "Фирменные блюда", k: "sp2.t", label: "Карточка 2 — название", fr: "Tartes flambées", en: "Tartes flambées", de: "Flammkuchen" },
  { sec: "Фирменные блюда", k: "sp2.d", label: "Карточка 2 — описание", long: true, fr: "La tradition alsacienne : crème, oignons, lardons — en version gratinée, forestière, munster…", en: "The Alsatian classic: cream, onions, bacon — also gratinée, with mushrooms, with Munster…", de: "Der Elsässer Klassiker: Sahne, Zwiebeln, Speck — auch überbacken, mit Pilzen, mit Munster…" },
  { sec: "Фирменные блюда", k: "sp2.p", label: "Карточка 2 — цена", fr: "dès 9 €", en: "from €9", de: "ab 9 €" },
  { sec: "Фирменные блюда", k: "sp3.t", label: "Карточка 3 — название", fr: "La touche cerise", en: "The cherry touch", de: "Der Kirsch-Moment" },
  { sec: "Фирменные блюда", k: "sp3.d", label: "Карточка 3 — описание", long: true, fr: "Tarte flambée aux griottes, bière Meteor cerise et notre liqueur de griottes maison.", en: "Morello cherry tarte flambée, Meteor cherry beer and our homemade cherry liqueur.", de: "Flammkuchen mit Sauerkirschen, Meteor-Kirschbier und unser hausgemachter Kirschlikör." },
  { sec: "Фирменные блюда", k: "sp3.p", label: "Карточка 3 — цена", fr: "5 – 12,5 €", en: "€5 – €12.50", de: "5 – 12,5 €" },

  { sec: "Меню, галерея, отзывы", k: "m.lead", label: "Текст над меню", long: true, fr: "Prix moyen d'un repas : 22 €. Tous nos plats sont servis avec une garniture au choix.", en: "Average price per meal: €22. All main dishes come with a side of your choice.", de: "Durchschnittspreis pro Mahlzeit: 22 €. Alle Hauptgerichte mit Beilage nach Wahl." },
  { sec: "Меню, галерея, отзывы", k: "m.note", label: "Примечание под меню", long: true, fr: "Carte indicative, susceptible d'évoluer selon les saisons. Tartes flambées salées disponibles à la dinde sur demande.", en: "Indicative menu, may change with the seasons. Savoury tartes flambées available with turkey on request.", de: "Unverbindliche Karte, kann sich je nach Saison ändern. Herzhafte Flammkuchen auf Wunsch mit Pute." },
  { sec: "Меню, галерея, отзывы", k: "g.title", label: "Заголовок галереи", fr: "Un coin de bonheur à Schilick", en: "A happy corner of Schilick", de: "Ein Glücksort in Schilick" },
  { sec: "Меню, галерея, отзывы", k: "r.title", label: "Заголовок отзывов", fr: "Ils en parlent mieux que nous", en: "They say it better than us", de: "Sie sagen es besser als wir" },
  { sec: "Меню, галерея, отзывы", k: "i.title", label: "Заголовок контактов", fr: "Venez nous voir", en: "Come and see us", de: "Besuchen Sie uns" }
];
})();
