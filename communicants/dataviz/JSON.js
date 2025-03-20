var quartiers=[
	{
	"id": "CV",
	"libelle": "CENTRE VILLE",
	"decription":"Lieu de prédilection pour les amateurs de shopping, le centre ville concentre la majorité des boutiques et restaurants de la ville. Si sa puissance économique n’est plus à prouver, l’histoire nantaise est également présente dans l’hyper-centre. Château des Ducs de Bretagne, Cathédrale Saint-Pierre, Tour LU, Chantiers Navals... Le passé de Nantes respire dans les rues du coeur de la cité. Côté communicants, c’est le Centre Ville regroupe le plus d’établissements liés à la communication et aux médias."
	},
	{
	"id": "CBS",
	"libelle": "CHANTENAY - BELLEVUE - SAINTE ANNE",
	"decription":"Situé à l’extrémité ouest de la ville, ce quartier s’étend des Chantiers Navals au Pont de Cheviré. Entre le charme des marchés de la butte Sainte-Anne et la forte présence industrielle du bas- Chantenay, le secteur “Quartier Nord” demeure l’un des plus constrasté de la ville."
	},
	{
	"id": "DZ",
	"libelle": "DERVALLIÈRES - ZOLA",
	"decription":"Quartier situé à l’ouest de Nantes, à proximité de la vallée de la Chézine, il bénéficie d’un environnement remarquable et méconnu.  Après de premières réhabilitations dans les années 1990, la rénovation du quartier se poursuit sur le Vallon des Dervallières, entre le Val de Chézine et le boulevard du Massacre. Habitat, équipements et espaces publics, cadre de vie : ce grand projet de renouvellement social et urbain, programmé de 2005 à 2015, vise à améliorer le confort de vie des habitants du quartier et à faciliter l’installation d’une population nouvelle."
	},
	{
	"id": "HPS",
	"libelle": "HAUTS PAVÉS - SAINT FÉLIX",
	"decription":"Proche du centre-ville, le quartier connait une attractivité certaine. Le site de l’Erdre (notamment l’île de Versaille), les lignes de tramway et le pôle universitaire en font le deuxième quartier le plus peuplé de la métropole."
	},
	{
	"id": "SDM",
	"libelle": "SAINT DONATIEN - MALAKOFF",
	"decription":"Tout comme le quartier “Quartier Nord”, le secteur de Malakoff / St Donatien, situé à l’est du centre ville, est également très constaté. Entre familles nombreuses, population jeune et programme de transformation urbaine, ce quartier demeure très hétérogène et plein d’avenir."
	},
	{
	"id": "IDN",
	"libelle": "ILE DE NANTES",
	"decription":""
	},
	{
	"id": "BB",
	"libelle": "BREIL - BARBERIE",
	"decription":"Situé à quelques encablures des hauts-pavés, ce quartier abrite de nombreux logements individuels de propriétaires. Même si sa population reste assez agée,  il reste un des plus dynamique de la métropole Nantaise, notamment grâce à la ligne 3 du tramway qui traverse son territoire."
	},
	{
	"id": "QN",
	"libelle": "QUARTIERS NORD",
	"decription":"Rythmés par le quartier étudiant du Petit Port, les Quartiers Nord bénéficient d’un dynamisme important malgré leur éloignement du centre ville. Hippodrome, base nautique, universités et écoles prestigieuses... Tous ces éléments en font un des secteur les plus attrayant de la métropole."
	},
	{
	"id": "NE",
	"libelle": "NANTES ERDRE",
	"decription":"Si vous cherchez LE quartier en progression ces dernières années, ne cherchez plus, Nantes Erdre est là ! Croissance de la population, faible taux de chomage, implantations d’entreprises et d’usines dynamisent cette zone longeant le deuxième fleuve de la ville, l’Erdre."
	},
	{
	"id": "DB",
	"libelle": "DOULON - BOTTIÈRE",
	"decription":"A tendance ouvrière, le quartier Ouest de la métropole Nantaise tend à se dynamiser au fil des années, notamment à travers différents projets d’urbanismes. Facilement relié au centre ville grâce à la ligne 1 du tramway nantais, c’est la quatrième quartier le plus peuplé de la métropole."
	},
	{
	"id": "QS",
	"libelle": "QUARTIERS SUD",
	"decription":"Souvent considérés comme exclus de la métropole à cause de son éloignement du centre, “Nantes Sud” demeurent pourtant un quartier où il fait bon vivre. De nombreux transports en commun (plateforme d’échange Pirmil / Busway) et des habitats collectifs de qualités combinés à un grand projet de restructuration urbaine en cours de développement rapprochent sensiblement les quartiers Sud du Centre de Nantes."
	},
];
/*///////variables de nombre d etablissement////////////////////*/
var nombreEtablissementCV=[
	/*1er cv 2nd c est idn*/
	{
	"val": "96",
	"couleurHexa":"#FBAE31",
	"description":"Il y a deux fois plus d'établissements communicants dans le Centre Ville que sur l'île de Nantes"
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var nombreEtablissementCBS=[
	{
	"val": "21",
	"couleurHexa":"#FBAE31",
	"description":"Il y a deux fois moins d'établissements communicants dans le quartier Chantenay - Bellevue - Sainte Anne que sur l'île de Nantes "
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];	

var nombreEtablissementDZ=[
	{
	"val": "18",
	"couleurHexa":"#FBAE31",
	"description":"Il y a trois fois moins d'établissements communicants dans le quartier Dervallières - Zola que sur l'île de Nantes"
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var nombreEtablissementHPS=[

	{
	"val": "37",
	"couleurHexa":"#FBAE31",
	"description":"La part des communicants du quartier Hauts-Pavés - Saint Félix représente les trois quarts de la part de communicants de l'île de Nantes."
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var nombreEtablissementSDM=[

	{
	"val": "16",
	"couleurHexa":"#FBAE31",
	"description":"Il y a trois fois moins d'établissements communicants dans le quartier Saint Donatien - Malakoff que sur l'île de Nantes "
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var nombreEtablissementBB=[
	{
	"val": "3",
	"couleurHexa":"#FBAE31",
	"description":"La part des établissements communicants présents dans le quartier Breil - Barberie représente 5% des effectifs de l'île De Nantes"
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var nombreEtablissementQN=[
	{
	"val":"9",
	"couleurHexa":"#fdd698",
	"description":"Il y a 5 fois plus d'établissements sur l'île De Nantes que dans les Quartiers Nords "
	},
	{
	"val":"50",
	"idn":"25",
	"description":"null"
	},
];
var nombreEtablissementNE=[

	{
	"val": "12",
	"couleurHexa":"#FBAE31",
	"description":"La part des communicants du quartier Nantes Erdre représente le quart de la part des communicants de l'île de Nantes."
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var nombreEtablissementDB=[

	{
	"val": "14",
	"couleurHexa":"#FBAE31",
	"description":"La part des communicants du quartier Doulon-Bottière représente le quart de la part des communicants de l'île de Nantes."
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var nombreEtablissementQS=[
	
	{
	"val": "3",
	"couleurHexa":"#FBAE31",
	"description":"L'ensemble des établissements communicants des Quartiers Sud représente seulement 5% des effectifs de l'île de Nantes."
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
/*//////////////////variables de taux de CA non declare///////////////////////////*/
var TauxCACV=[

	{
	"val": "60",
	"couleurHexa":"#FBAE31",
	"description":"<span class='lead2'>Compte-tenu du peu de données financières recueillies, nous avons choisi de valoriser les entreprises communicant leur chiffre d'affaire.</span>59% des établissements du centre-ville n'ont pas communiqué leur Chiffre d'affaire contre 90% pour ceux de l'île de Nantes."
	},
	{
	"val":"90",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var TauxCACBS=[

	{
	"val": "89",
	"couleurHexa":"#FBAE31",
	"description":"<span class='lead2'>Compte-tenu du peu de données financières recueillies, nous avons choisi de valoriser les entreprises communicant leur chiffre d'affaire.</span>88% des établissements du centre-ville n'ont pas communiqué leur chiffre d'affaire contre 90% pour l'île de Nantes."
	},
	{
	"val":"90",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var TauxCADZ=[
	{
	"val": "63",
	"couleurHexa":"#FBAE31",
	"description":"<span class='lead2'>Compte-tenu du peu de données financières recueillies, nous avons choisi de valoriser les entreprises communicant leur chiffre d'affaire.</span>62% des établissement du quartier Dervallières - Zola n'ont pas communiqué leur CA / 90% des établissement de l'île de nantes n'ont pas communiqués leur CA"
	},
	{
	"val":"90",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var TauxCAHPS=[
{
	"val": "75",
	"couleurHexa":"#FBAE31",
	"description":"<span class='lead2'>Compte-tenu du peu de données financières recueillies, nous avons choisi de valoriser les entreprises communicant leur chiffre d'affaire.</span>75% des établissement du quartier Haut Pavés - Saint Félix n'ont pas communiqué leur CA / 90% des établissement de l'île de Nantes n'ont pas communiqués leur CA"
	},
	{
	"val":"90",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var TauxCASDM=[

	{
	"val": "72",
	"couleurHexa":"#FBAE31",
	"description":"<span class='lead2'>Compte-tenu du peu de données financières recueillies, nous avons choisi de valoriser les entreprises communicant leur chiffre d'affaire.</span>71% des établissement du quartier de St Donatien - Malakoff n'ont pas communiqués leur CA /  90% des établissement de l'île de nantes n'ont pas communiqués leur CA"
	},
	{
	"val":"90",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var TauxCABB=[
	{
	"val": "99",
	"couleurHexa":"#FBAE31",
	"description":"<span class='lead2'>Compte-tenu du peu de données financières recueillies, nous avons choisi de valoriser les entreprises communicant leur chiffre d'affaire.</span>Aucun établissement du quartier Nantes Sud n'a souhaité communiqué son chiffre d'affaire alors que 90% des établissements de l'île de Nantes sont dans ce cas."
	},
	{
	"val":"90",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var TauxCAQN=[
	{
	"val": "99",
	"couleurHexa":"#FBAE31",
	"description":"<span class='lead2'>Compte-tenu du peu de données financières recueillies, nous avons choisi de valoriser les entreprises communicant leur chiffre d'affaire.</span>100% des établissement des Quartiers Nords n'ont pas communiqué leur CA / 90% des établissement de l'île de Nantes n'ont pas communiqués leur CA"
	},
	{
	"val":"90",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var TauxCANE=[
	{
	"val": "80",
	"couleurHexa":"#FBAE31",
	"description":"<span class='lead2'>Compte-tenu du peu de données financières recueillies, nous avons choisi de valoriser les entreprises communicant leur chiffre d'affaire.</span>80% des établissement du quartier de Nantes Erdre n'ont pas communiqué leur CA / 90% des établissement de l'île de Nantes n'ont pas communiqués leur CA"
	},
	{
	"val":"90",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
var TauxCADB=[
	
	{
	"val": "34",
	"couleurHexa":"#FBAE31",
	"description":"<span class='lead2'>Compte-tenu du peu de données financières recueillies, nous avons choisi de valoriser les entreprises communicant leur chiffre d'affaire.</span>33% des établissement du quartier Doulon - Bottière n'ont pas communiqué leur CA / 90% des établissement de l'île de Nantes n'ont pas communiqués leur CA"
	},
	{
	"val":"90",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var TauxCAQS=[

	{
	"val": "99",
	"couleurHexa":"#FBAE31",
	"description":"<span class='lead2'>compte tenu du peu de données financières receuillies, nous avons choisi de valoriser le taux de CA non communiqués par les établissements de la communication.</span>100% des établissement des Quartiers Sud n'ont pas communiqué leur CA 90% des établissement de l'île de nantes n'ont pas communiqués leur CA"
	},
	{
	"val":"90",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
/*///////////variables de nombre d employes////////////////*/
var NbEmpCV=[
	{
	"val": "97",
	"couleurHexa":"#FBAE31",
	"description":"Il y a 4 fois plus d'employés dans le Centre Ville que sur l'île De Nantes"
	},
	{
	"val":"24",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var NbEmpCBS=[
	{
	"val": "5",
	"couleurHexa":"#FBAE31",
	"description":"Il y a 5 fois moins d'employés dans la communication dans le quartier Chantenay - Bellevue - Sainte Anne que sur l'île de Nantes"
	},
	{
	"val":"24",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var NbEmpDZ=[
	{
	"val": "5",
	"couleurHexa":"#FBAE31",
	"description":"Il y a 5 fois moins d'employés dans la communication dans le quartier Dervallières-Zola que sur l'île de Nantes"
	},
	{
	"val":"24",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var NbEmpHPS=[
	{
	"val": "43",
	"couleurHexa":"#FBAE31",
	"description":"Le quartier Hauts Pavés - Saint Félix emploie approximativement deux fois plus d'employés communicants que l'île de Nantes"
	},
	{
	"val":"24",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var NbEmpSDM=[
	{
	"val": "6",
	"couleurHexa":"#FBAE31",
	"description":"L'ensemble des employés dans la communication du quartier Saint-Donatien / Malokoff représente seulement 20% du total des employés de l'île de Nantes."
	},
	{
	"val":"24",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var NbEmpBB=[
	{
	"val": "1",
	"couleurHexa":"#FBAE31",
	"description":"L'ensemble des employés dans la communication du quartier Breil-Barberie représente seulement 2% du total des employés de l'île de Nantes."
	},
	{
	"val":"24",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var NbEmpQN=[
	{
	"val": "5",
	"couleurHexa":"#FBAE31",
	"description":"L'ensemble des employés dans la communication du Quartier Nord représente seulement 20% du total des employés de l'IDN"
	},
	{
	"val":"24",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var NbEmpNE=[
	{
	"val": "1",
	"couleurHexa":"#FBAE31",
	"description":"L'ensemble des employés dans la communication du quartier Nantes Erdre représente seulement 4% du total des employés de l'île de Nantes"
	},
	{
	"val":"24",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var NbEmpDB=[
	{
	"val": "1",
	"couleurHexa":"#FBAE31",
	"description":"L'ensemble des employés dans la communication du quartier Doulon-Bottière représente seulement 2% du total des employés de l'île de Nantes"
	},
	{
	"val":"24",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var NbEmpQS=[
	{
	"val": "9",
	"couleurHexa":"#FBAE31",
	"description":"L'ensemble des employés dans la communication du quartier Nantes Sud représente 36% du total des employés de l'île de Nantes."
	},
	{
	"val":"24",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];
/*//////////variables de ration nb medias et nom de prestataires/////////////*/
var RatioNbMediaIDN=[
	/*variable qui contient le nombre de medias et de prest de comm*/
	/*ici c est celui la (idn)qui servira de comparatif a chaque fois*/
	/*donnee 1 : nombre de media*/
	/*donnee 1 : nombre de prest de comm*/
	{
	"val": "23",
	"couleurHexa":"#C89F72",
	"description":"null"
	},
	{
	"val":"77",
	"couleurHexa":"#e3cfb8",
	"description":"null"
	},
];

var RatioNbMediaCV=[
	{
	"val": "43",
	"couleurHexa":"#FBAE31",
	"description":"null"
	},
	{
	"val":"57",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var RatioNbMediaCBS=[
	{
	"val": "22",
	"couleurHexa":"#FBAE31",
	"description":"null"
	},
	{
	"val":"78",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var RatioNbMediaDZ=[
	{
	"val": "38",
	"couleurHexa":"#FBAE31",
	"description":"null"
	},
	{
	"val":"63",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var RatioNbMediaHPS=[
	{
	"val": "50",
	"couleurHexa":"#FBAE31",
	"description":"null"
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var RatioNbMediaSDM=[
	{
	"val": "29",
	"couleurHexa":"#FBAE31",
	"description":"null"
	},
	{
	"val":"72",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var RatioNbMediaBB=[
	{
	"val": "0",
	"couleurHexa":"#FBAE31",
	"description":"null"
	},
	{
	"val":"100",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var RatioNbMediaQN=[
	{
	"val": "50",
	"couleurHexa":"#FBAE31",
	"description":"null"
	},
	{
	"val":"50",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var RatioNbMediaNE=[
	{
	"val": "0",
	"couleurHexa":"#FBAE31",
	"description":"null"
	},
	{
	"val":"100",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var RatioNbMediaDB=[
	{
	"val": "33",
	"couleurHexa":"#FBAE31",
	"description":"null"
	},
	{
	"val":"67",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

var RatioNbMediaQS=[
	{
	"val": "0",
	"couleurHexa":"#FBAE31",
	"description":"null"
	},
	{
	"val":"100",
	"couleurHexa":"#fdd698",
	"description":"null"
	},
];

