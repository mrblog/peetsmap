
var locations;
var map;

// Initialize and add the map
function initMap() {
  locations = [
    {
      "name": "Alameda",
      "address": "1365 Park Street, Alameda, CA 94501",
      "position": {"lat": 37.7640999, "lng": -122.2431563}
    }, {
      "name": "Alameda—Webster",
      "address": "1901 Webster Ave., , Alameda, CA 94501",
      "position": {"lat": 37.7784885, "lng": -122.2767596}
    }, {
      "name": "Alamo",
      "address": "215 Alamo Plaza, Suite E, Alamo, CA 94507",
      "position": {"lat": 37.8510568, "lng": -122.0338765}
    }, {
      "name": "Aptos",
      "address": "50 Rancho Del Mar Boulevard, , Aptos, CA 95003",
      "position": {"lat": 36.978329, "lng": -121.9080265}
    }, {
      "name": "Belmont",
      "address": "1200A El Camino Real, Belmont, CA 94002",
      "position": {"lat": 37.5191074831441, "lng": -122.274512666599}
    }, {
      "name": "Berkeley—4th Street",
      "address": "1776 4th Street, Berkeley, CA 94710",
      "position": {"lat": 37.8704672, "lng": -122.301107}
    }, {
      "name": "Berkeley—Domingo",
      "address": "2916 Domingo Avenue, Berkeley, CA 94705",
      "position": {"lat": 37.8587473, "lng": -122.2441373}
    }, {
      "name": "Berkeley—Shattuck",
      "address": "2255 Shattuck Avenue, Berkeley, CA 94704",
      "position": {"lat": 37.8683364, "lng": -122.2674186}
    }, {
      "name": "Berkeley—Solano Ave.",
      "address": "1825 Solano Avenue, Berkeley, CA 94707",
      "position": {"lat": 37.8916494, "lng": -122.2792665}
    }, {
      "name": "Berkeley—Telegraph & Dwight",
      "address": "2501 Telegraph Avenue, Berkeley, CA 94704",
      "position": {"lat": 37.8650045, "lng": -122.2581655}
    }, {
      "name": "Berkeley—Vine Street",
      "address": "2124 Vine Street, Berkeley, CA 94709",
      "position": {"lat": 37.880165, "lng": -122.2683175}
    }, {
      "name": "Berkeley—College Ave",
      "address": "3200 College Ave. , Berkeley, CA 94705",
      "position": {"lat": 37.8510027, "lng": -122.2527752}
    }, {
      "name": "Beverly Hills",
      "address": "258 South Beverly Drive, Beverly Hills, CA 90212",
      "position": {"lat": 34.0633466146311, "lng": -118.398981848325}
    }, {
      "name": "Brentwood—Lone Tree",
      "address": "5411 Lone Tree Way, Ste. L130, Brentwood, CA 94513",
      "position": {"lat": 37.9613036, "lng": -121.7496863}
    }, {
      "name": "Burlingame",
      "address": "1241 Burlingame Avenue, Burlingame, CA 94010",
      "position": {"lat": 37.5788601534573, "lng": -122.346490785096}
    }, {
      "name": "Campbell Pruneyard",
      "address": "1875 S. Bascom Avenue, Ste. 800, Campbell, CA 95008",
      "position": {"lat": 37.2884463, "lng": -121.933398}
    }, {
      "name": "Capitola",
      "address": "819 Bay Avenue, Capitola, CA 95010",
      "position": {"lat": 36.9812031812805, "lng": -121.955680553893}
    }, {
      "name": "Carlsbad",
      "address": "2641 Gateway Rd., Carlsbad, CA 92009",
      "position": {"lat": 33.1266884, "lng": -117.2538566}
    }, {
      "name": "Castro Valley",
      "address": "20439 Redwood Road, Castro Valley, CA 94546",
      "position": {"lat": 37.6973614865519, "lng": -122.074073912751}
    }, {
      "name": "Concord Veranda",
      "address": "2095 Diamond Blvd, Ste 100, Concord, CA 94520",
      "position": {"lat": 37.9756279053888, "lng": -122.059420010737}
    }, {
      "name": "Concord—Clayton",
      "address": "5458 Ygnacio Valley Rd, Ste. 10, Concord, CA 94521",
      "position": {"lat": 37.9513948, "lng": -121.9565064}
    }, {
      "name": "Concord—Downtown",
      "address": "2072 Salvio Street, Concord, CA 94520",
      "position": {"lat": 37.9772273, "lng": -122.0347544}
    }, {
      "name": "Concord—Treat & Oak Grove",
      "address": "785 Oak Grove Road, Concord, CA 94518",
      "position": {"lat": 37.9377385, "lng": -122.0253092}
    }, {
      "name": "Corte Madera",
      "address": "77 Casa Buena Drive, Corte Madera, CA 94925",
      "position": {"lat": 37.9253473667827, "lng": -122.508433380271}
    }, {
      "name": "Costa Mesa",
      "address": "424 E. 17th Street, Costa Mesa, CA 92627",
      "position": {"lat": 33.6306029, "lng": -117.9108289}
    }, {
      "name": "Cotati",
      "address": "7764 Old Redwood Hwy, Cotati, CA 94931",
      "position": {"lat": 38.331106, "lng": -122.7100793}
    }, {
      "name": "Cupertino—Homestead",
      "address": "22350 Homestead Road, Cupertino, CA 94014",
      "position": {"lat": 37.3372654, "lng": -122.0661831}
    }, {
      "name": "Cupertino",
      "address": "20807 Stevens Creek Blvd., Ste. 200, Cupertino, CA 95014",
      "position": {"lat": 37.3232023, "lng": -122.0381055}
    }, {
      "name": "Daly City Serramonte",
      "address": "153-B Serramonte Center, Daly City, CA 94015",
      "position": {"lat": 37.6693254905031, "lng": -122.475068360904}
    }, {
      "name": "Danville",
      "address": "435 Railroad Avenue, Danville, CA 94526",
      "position": {"lat": 37.8188634, "lng": -121.9972835}
    }, {
      "name": "Davis—Downtown",
      "address": "231 E Street, Davis, CA  95616",
      "position": {"lat": 38.5440995, "lng": -121.7416743}
    }, {
      "name": "Davis",
      "address": "1411 W. Covell Blvd, #114B, Davis, CA 95616",
      "position": {"lat": 38.5623359, "lng": -121.7656378}
    }, {
      "name": "Dublin",
      "address": "4620 Tassajara Road, Ste C, Dublin, CA 94568",
      "position": {"lat": 37.7080093, "lng": -121.8725481}
    }, {
      "name": "El Cerrito",
      "address": "9895 San Pablo Ave, El Cerrito, CA 94530",
      "position": {"lat": 37.8987482, "lng": -122.3019877}
    }, {
      "name": "El Dorado Hills",
      "address": "1004 White Rock Road, Suite 100, El Dorado Hills, CA 95762",
      "position": {"lat": 38.6763694247091, "lng": -121.057734411578}
    }, {
      "name": "El Segundo",
      "address": "820 S. Sepulveda,Suite A100, El Segundo, CA 90245",
      "position": {"lat": 33.911188324054, "lng": -118.395824768482}
    }, {
      "name": "Elk Grove—Laguna Promenade",
      "address": "7127 Elk Grove Blvd, Suite 101, Elk Grove, CA 95758",
      "position": {"lat": 38.4094197, "lng": -121.4193624}
    }, {
      "name": "Elk Grove",
      "address": "8234 Laguna Blvd., Ste. 100, Elk Grove, CA 95758",
      "position": {"lat": 38.4219254, "lng": -121.4016612}
    }, {
      "name": "Emeryville",
      "address": "5959 Shellmound Street, Ste. 85, Emeryville, CA 94608",
      "position": {"lat": 37.8414832, "lng": -122.2936868}
    }, {
      "name": "Encinitas",
      "address": "1486 Encinitas Road, Encinitas, CA 92024",
      "position": {"lat": 33.0459256175294, "lng": -117.257509706547}
    }, {
      "name": "Fair Oaks",
      "address": "8909 Madison Ave; Suite 400, Fair Oaks, CA 95628",
      "position": {"lat": 38.6640054546903, "lng": -121.225046613924}
    }, {
      "name": "Fairfield",
      "address": "1380 Holiday Lane, Ste. 3, Fairfield, CA 94534",
      "position": {"lat": 38.2576835, "lng": -122.0642926}
    }, {
      "name": "Folsom",
      "address": "1290 E. Bidwell Street, Suite 110, Folsom, CA 95630",
      "position": {"lat": 38.6692856621304, "lng": -121.151601818325}
    }, {
      "name": "Fremont",
      "address": "2780 Mowry Avenue, Fremont, CA 94538",
      "position": {"lat": 37.5543383, "lng": -121.9816865}
    }, {
      "name": "Granite Bay",
      "address": "5550 Douglas Blvd., Suite D-110, Granite Bay, CA 95746",
      "position": {"lat": 38.7435673, "lng": -121.1970756}
    }, {
      "name": "Greenbrae",
      "address": "276 Bon Air Center, Greenbrae, CA 94904",
      "position": {"lat": 37.9456419, "lng": -122.5239594}
    }, {
      "name": "Half Moon Bay",
      "address": "142 San Mateo Rd, Half Moon Bay, CA 94019",
      "position": {"lat": 37.4679637654384, "lng": -122.429389311813}
    }, {
      "name": "Hayward",
      "address": "878 B Street, Hayward, CA 94541",
      "position": {"lat": 37.6721319, "lng": -122.0842922}
    }, {
      "name": "Huntington Beach",
      "address": "7821 Edinger Ave., Bldg. B3, Ste. 138, Huntington Beach, CA 92647",
      "position": {"lat": 33.7327547, "lng": -117.9920079}
    }, {
      "name": "Irvine—Crossroads",
      "address": "3972 Barranca Pkwy, Suite F-2, Irvine, CA 92606",
      "position": {"lat": 33.6848927, "lng": -117.8106961}
    }, {
      "name": "Irvine—Orchard Hills",
      "address": "3927 Portola Parkway, Irvine, CA 92620",
      "position": {"lat": 33.7344992, "lng": -117.7600657}
    }, {
      "name": "Irvine—U.C. Irvine",
      "address": "4213 Campus Drive, Suite P166-A, Irvine, CA 92612",
      "position": {"lat": 33.650478, "lng": -117.8376356}
    }, {
      "name": "La Jolla Village",
      "address": "7910 Girard Avenue, Unit B, La Jolla, CA 92037",
      "position": {"lat": 32.8466957, "lng": -117.2748676}
    }, {
      "name": "Lafayette",
      "address": "3518 Mount Diablo Blvd, #E, Lafayette, CA 94549",
      "position": {"lat": 37.8922528751782, "lng": -122.117746252069}
    }, {
      "name": "Laguna Niguel—Aliso Village",
      "address": "23904 Aliso Creek Rd, Laguna Niguel, CA 92677",
      "position": {"lat": 33.5544698, "lng": -117.7130091}
    }, {
      "name": "Laguna Niguel",
      "address": "32371 Golden Lantern, Bldg 6,  Ste H, Laguna Niguel, CA 92677",
      "position": {"lat": 33.4922968, "lng": -117.6977689}
    }, {
      "name": "Lake Forest",
      "address": "23700 El Toro Road, Suite B, Lake Forest, CA 92630",
      "position": {"lat": 33.6182108, "lng": -117.7028226}
    }, {
      "name": "Livermore",
      "address": "152 South Livermore Ave, Livermore, CA 94550",
      "position": {"lat": 37.6818402, "lng": -121.7678305}
    }, {
      "name": "Los Altos—El Camino",
      "address": "4598 El Camino Real, Los Altos, CA 94022",
      "position": {"lat": 37.4006127, "lng": -122.1132333}
    }, {
      "name": "Los Altos—Los Altos",
      "address": "367 State Street, Los Altos, CA 94022",
      "position": {"lat": 37.3786004, "lng": -122.1179347}
    }, {
      "name": "Los Angeles—1854 Westwood",
      "address": "1854 Westwood Blvd., Los Angeles, CA 90025",
      "position": {"lat": 34.0488548, "lng": -118.435643}
    }, {
      "name": "Los Angeles—3rd & Fairfax",
      "address": "175 S. Fairfax Ave. Unit D, Los Angeles, CA 90036",
      "position": {"lat": 34.072, "lng": -118.36164}
    }, {
      "name": "Los Angeles—Larchmont",
      "address": "124 N. Larchmont, Los Angeles, CA 90004",
      "position": {"lat": 34.07376, "lng": -118.32343}
    }, {
      "name": "Los Angeles—Westwood Village",
      "address": "1154 Westwood Boulevard, Los Angeles, CA 90024",
      "position": {"lat": 34.0598613, "lng": -118.4445808}
    }, {
      "name": "Los Gatos—Los Gatos",
      "address": "798-1 Blossom Hill Road, Los Gatos, CA 95032",
      "position": {"lat": 37.2353228096609, "lng": -121.961166203628}
    }, {
      "name": "Manhattan Beach",
      "address": "328 Manhattan Beach Blvd, Manhattan Beach, CA 90266",
      "position": {"lat": 33.8851321772251, "lng": -118.409386732247}
    }, {
      "name": "Marina Del Rey",
      "address": "4706 Lincoln Blvd., Marina Del Rey, CA 90292",
      "position": {"lat": 33.9802546, "lng": -118.4384085}
    }, {
      "name": "Menlo Park",
      "address": "899 Santa Cruz Avenue, Menlo Park, CA 94025",
      "position": {"lat": 37.4493415567865, "lng": -122.18629792563}
    }, {
      "name": "Menlo Park—El Camino",
      "address": "515 El Camino Real; Suite 100, Menlo Park, CA 94025",
      "position": {"lat": 37.4505940201111, "lng": -122.177715149977}
    }, {
      "name": "Mill Valley",
      "address": "88 Throckmorton, Mill Valley, CA 94941",
      "position": {"lat": 37.906585, "lng": -122.5482623}
    }, {
      "name": "Millbrae",
      "address": "401 Broadway, Millbrae, CA 94030",
      "position": {"lat": 37.6014911450441, "lng": -122.392673114287}
    }, {
      "name": "Milpitas",
      "address": "543 E. Calaveras Blvd., Milpitas, CA 95035",
      "position": {"lat": 37.4336553229977, "lng": -121.893873029254}
    }, {
      "name": "Mission Viejo",
      "address": "27750 Crown Valley Parkway, Ste C, Mission Viejo, CA 92691",
      "position": {"lat": 33.5591700117517, "lng": -117.672623193029}
    }, {
      "name": "Monterey",
      "address": "560 Munras, Suite 10, Monterey, CA 93940",
      "position": {"lat": 36.596915931311, "lng": -121.894235112581}
    }, {
      "name": "Morgan Hill",
      "address": "755 Cochrane Rd., Suite 100, Morgan Hill, CA 95037",
      "position": {"lat": 37.1512537, "lng": -121.6563984}
    }, {
      "name": "Mountain View",
      "address": "801 W El Camino Real, Suite A, Mountain View, CA 94040",
      "position": {"lat": 37.3855864, "lng": -122.0842828}
    }, {
      "name": "Mountain View—Mtn View Castro",
      "address": "420 Castro Street, Mountain View, CA 94041",
      "position": {"lat": 37.3910649, "lng": -122.0811588}
    }, {
      "name": "Napa",
      "address": "3678 Bel Aire Plaza, Napa, CA 94558",
      "position": {"lat": 38.3227582, "lng": -122.3059221}
    }, {
      "name": "Newport Beach—Corona Del Mar",
      "address": "894 Avocado Avenue, Newport Beach, CA 92660",
      "position": {"lat": 33.605641, "lng": -117.8750106}
    }, {
      "name": "Novato—Hamilton",
      "address": "5800 Nave Drive, Suite M, Novato, CA 94949",
      "position": {"lat": 38.0637828, "lng": -122.5336163}
    }, {
      "name": "Novato",
      "address": "7320 Redwood Blvd., Suite A, Novato, CA 94945",
      "position": {"lat": 38.1058490637869, "lng": -122.570681274881}
    }, {
      "name": "Oakland—1111 Broadway",
      "address": "1111 Broadway, Oakland, CA 94607",
      "position": {"lat": 37.8028192, "lng": -122.2728002}
    }, {
      "name": "Oakland—Dimond District",
      "address": "3401 Fruitvale Avenue, Oakland, CA 94602",
      "position": {"lat": 37.7994834, "lng": -122.21686}
    }, {
      "name": "Oakland—Lakeshore",
      "address": "3258 Lakeshore Avenue, Oakland, CA 94610",
      "position": {"lat": 37.8103295, "lng": -122.2444583}
    }, {
      "name": "Oakland—Latham Square",
      "address": "1615 Broadway, Oakland, CA 94612",
      "position": {"lat": 37.8062403, "lng": -122.2702367}
    }, {
      "name": "Oakland—Montclair",
      "address": "2066 Antioch Court, Oakland, CA 94611",
      "position": {"lat": 37.8263313947175, "lng": -122.209140761549}
    }, {
      "name": "Oakland—Piedmont",
      "address": "4050 Piedmont Avenue, Oakland, CA 94611",
      "position": {"lat": 37.8259559794508, "lng": -122.252951088107}
    }, {
      "name": "Oakland—Temescal",
      "address": "5095 Telegraph Ave., Suite #1, Oakland, CA 94609",
      "position": {"lat": 37.8373254963828, "lng": -122.262450498642}
    }, {
      "name": "Orinda",
      "address": "63 Moraga Way, Orinda, CA 94563",
      "position": {"lat": 37.8686372, "lng": -122.1585154}
    }, {
      "name": "Palo Alto—Charleston",
      "address": "3904 Middlefield Road, Palo Alto, CA 94303",
      "position": {"lat": 37.4191592, "lng": -122.1105961}
    }, {
      "name": "Palo Alto—Downtown",
      "address": "436 University Ave., Palo Alto, CA 94301",
      "position": {"lat": 37.4475223, "lng": -122.1597043}
    }, {
      "name": "Palo Alto",
      "address": "153 Homer Avenue, Palo Alto, CA 94301",
      "position": {"lat": 37.4419082, "lng": -122.1597277}
    }, {
      "name": "Palo Alto—Town & Country",
      "address": "77 Town & Country, Palo Alto, CA 94301",
      "position": {"lat": 37.4441223051854, "lng": -122.149916076319}
    }, {
      "name": "Pasadena—Hastings Ranch",
      "address": "3571-A East Foothill Boulevard, Pasadena, CA 91107",
      "position": {"lat": 34.1502511199522, "lng": -118.076527511508}
    }, {
      "name": "Pasadena",
      "address": "605 South Lake Avenue, Pasadena, CA 91106",
      "position": {"lat": 34.1563695, "lng": -118.132852}
    }, {
      "name": "Petaluma—Washington Square",
      "address": "351 S. McDowell Blvd, Petaluma, CA 94954",
      "position": {"lat": 38.2500024, "lng": -122.6240297}
    }, {
      "name": "Petaluma",
      "address": "5 Petaluma Blvd. South, Suite A, Petaluma, CA 94952",
      "position": {"lat": 38.2332846, "lng": -122.6386762}
    }, {
      "name": "Pinole",
      "address": "2712 Pinole Valley Road, Pinole, CA 94564",
      "position": {"lat": 37.9957529, "lng": -122.2864407}
    }, {
      "name": "Pleasant Hill",
      "address": "65 Crescent Drive, Suite A, Pleasant Hill, CA 94523",
      "position": {"lat": 37.9454047, "lng": -122.0621598}
    }, {
      "name": "Pleasanton—Main Street",
      "address": "349 Main Street, Suite 110, Pleasanton, CA 94566",
      "position": {"lat": 37.6593434, "lng": -121.8767632}
    }, {
      "name": "Pleasanton",
      "address": "5765 Valley Ave., Suite 100, Pleasanton, CA 94566",
      "position": {"lat": 37.6766581, "lng": -121.8966059}
    }, {
      "name": "Porter Ranch",
      "address": "20105 W. Rinaldi St., , Porter Ranch, CA 91326",
      "position": {"lat": 34.27551, "lng": -118.57176}
    }, {
      "name": "Redondo Beach",
      "address": "1418 S. Pacific Coast Highway, Redmondo Beach, CA 90277",
      "position": {"lat": 33.8216707746942, "lng": -118.385269453585}
    }, {
      "name": "Redwood City",
      "address": "2600 Broadway, Redwood City, CA 94063",
      "position": {"lat": 37.4862959935231, "lng": -122.234840416243}
    }, {
      "name": "Roseville Sunrise & Cirby",
      "address": "1200 Cirby Way, Suite A, Roseville, CA 95661",
      "position": {"lat": 38.7292186, "lng": -121.2708834}
    }, {
      "name": "Roseville—Rocklin",
      "address": "731 Pleasant Grove Blvd, Suite 185, Roseville, CA 95678",
      "position": {"lat": 38.7903621, "lng": -121.2787293}
    }, {
      "name": "Roseville—The Fountains",
      "address": "1198 Roseville Parkway, Suite 175, Roseville, CA 95678",
      "position": {"lat": 38.7682107, "lng": -121.2677256}
    }, {
      "name": "South SF",
      "address": "102 Grand Avenue, S. San Francisco, CA 94080",
      "position": {"lat": 37.654756957201, "lng": -122.407804691883}
    }, {
      "name": "Sacramento—20th and J",
      "address": "1050 20th Street, Suite 190, Sacramento, CA 95814",
      "position": {"lat": 38.5758982204859, "lng": -121.480341079766}
    }, {
      "name": "Sacramento—Alhambra",
      "address": "3100 Folsom, Suite 100, Sacramento, CA 95816",
      "position": {"lat": 38.5689941, "lng": -121.4665399}
    }, {
      "name": "Sacramento—Crocker Village",
      "address": "3700 Crocker Drive, Suite 170, , Sacramento, CA 95818",
      "position": {"lat": 38.5558945984915, "lng": -121.49664660973}
    }, {
      "name": "Sacramento—Lyon Village",
      "address": "2580 Fair Oaks Blvd, Suite 2, Sacramento, CA 95825",
      "position": {"lat": 38.574151915355, "lng": -121.402074689344}
    }, {
      "name": "Sacramento—R Street",
      "address": "1800 19th Street, Sacramento, CA 95814",
      "position": {"lat": 38.5682514, "lng": -121.4852714}
    }, {
      "name": "Sacramento—Market Square",
      "address": "1749 Arden Way, Sacramento, CA 95815",
      "position": {"lat": 38.5983845129141, "lng": -121.424452930537}
    }, {
      "name": "San Anselmo",
      "address": "896 Sir Francis Drake Blvd, San Anselmo, CA 94960",
      "position": {"lat": 37.9814051, "lng": -122.5655783}
    }, {
      "name": "San Carlos",
      "address": "677 Laurel, Suite B, San Carlos, CA 94070",
      "position": {"lat": 37.50560224208, "lng": -122.259962091761}
    }, {
      "name": "San Clemente",
      "address": "801-B Avenida Talega, San Clemente, CA 92673",
      "position": {"lat": 33.4668866833918, "lng": -117.611867951859}
    }, {
      "name": "San Diego—Hillcrest",
      "address": "350 University Avenue, Suite D, San Diego, CA 92103",
      "position": {"lat": 32.7485861, "lng": -117.1619492}
    }, {
      "name": "San Diego—Point Loma",
      "address": "955 Catalina Boulevard, Suite 103, San Diego, CA 92106",
      "position": {"lat": 32.7217635, "lng": -117.2454376}
    }, {
      "name": "San Diego—Rancho Bernardo",
      "address": " 11922 Bernardo Plaza Dr, San Diego, CA 92128",
      "position": {"lat": 33.02015, "lng": -117.0728723}
    }, {
      "name": "San Diego—Torrey Highlands",
      "address": "7845 Highland Village Place, Ste C105, San Diego, CA 92129",
      "position": {"lat": 32.9613385, "lng": -117.154161}
    }, {
      "name": "San Francisco—1400 Mission",
      "address": "1400 Mission Street, Suite 130, San Francisco, CA 94102",
      "position": {"lat": 37.775248, "lng": -122.4162567}
    }, {
      "name": "San Francisco—16th & Geary",
      "address": "5201 Geary Blvd, San Francisco, CA 94118",
      "position": {"lat": 37.7802478, "lng": -122.4752661}
    }, {
      "name": "San Francisco—1st & Howard",
      "address": "405 Howard, San Francisco, CA 94105",
      "position": {"lat": 37.7886089, "lng": -122.3953756}
    }, {
      "name": "San Francisco—3rd & Mission",
      "address": "692 Mission Street, San Francisco, CA 94105",
      "position": {"lat": 37.7864376114245, "lng": -122.401930632964}
    }, {
      "name": "San Francisco—450 Sansome",
      "address": "450 Sansome, Suite #1, San Francisco, CA 94111",
      "position": {"lat": 37.7946436, "lng": -122.4011445}
    }, {
      "name": "San Francisco—4th & Harrison",
      "address": "370 Fourth Street, San Francisco, CA 94107",
      "position": {"lat": 37.7811131980502, "lng": -122.400163202302}
    }, {
      "name": "San Francisco—595 Market Street",
      "address": "595 Market St., Suite 143, San Francisco, CA 94105",
      "position": {"lat": 37.7893179, "lng": -122.4006546}
    }, {
      "name": "San Francisco—773 Market",
      "address": "773 Market Street, San Francisco, CA 94102",
      "position": {"lat": 37.7853957, "lng": -122.404391}
    }, {
      "name": "San Francisco—855 Brannan",
      "address": "855 Brannan Street, San Francisco, CA 94103",
      "position": {"lat": 37.7726432, "lng": -122.4034626}
    }, {
      "name": "San Francisco—9th and Bryant",
      "address": "555 9th Street, Suite B5, San Francisco, CA 94103",
      "position": {"lat": 37.7706777959909, "lng": -122.407631971591}
    }, {
      "name": "San Francisco—Bush/Battery/Market",
      "address": "22 Battery Street, San Francisco, CA 94111",
      "position": {"lat": 37.7915758, "lng": -122.3993634}
    }, {
      "name": "San Francisco—Chestnut",
      "address": "2080 Chestnut St., San Francisco, CA 94123",
      "position": {"lat": 37.8008828, "lng": -122.437882}
    }, {
      "name": "San Francisco—Cole",
      "address": "919 Cole St., San Francisco, CA 94117",
      "position": {"lat": 37.7654653, "lng": -122.4501862}
    }, {
      "name": "San Francisco—Embarcadero",
      "address": "Two Embarcadero Center, Suite R2113, San Francisco, CA 94111",
      "position": {"lat": 37.7991868645677, "lng": -122.397902818203}
    }, {
      "name": "San Francisco—Fell & Broderick",
      "address": "310 Broderick St., San Francisco, CA 94107",
      "position": {"lat": 37.7733782, "lng": -122.4390172}
    }, {
      "name": "San Francisco—Ferry Building",
      "address": "1 Ferry Building, Shop 43, San Francisco, CA 94111",
      "position": {"lat": 37.7991868645677, "lng": -122.397902818203}
    }, {
      "name": "San Francisco—Fillmore",
      "address": "2197 Fillmore Street, San Francisco, CA 94115",
      "position": {"lat": 37.7896008, "lng": -122.4342828}
    }, {
      "name": "San Francisco—Laurel Village",
      "address": "3419 California Street, San Francisco, CA 94118",
      "position": {"lat": 37.7863886, "lng": -122.4504096}
    }, {
      "name": "San Francisco—Market Street",
      "address": "2257 Market Street, San Francisco, CA 94114",
      "position": {"lat": 37.7647639, "lng": -122.4318397}
    }, {
      "name": "San Francisco—Mission Street",
      "address": "595 Mission Street, Suite 101, San Francisco, CA 94105",
      "position": {"lat": 37.787994089278, "lng": -122.399668875332}
    }, {
      "name": "San Francisco—One California",
      "address": "1 California, San Francisco, CA 94111",
      "position": {"lat": 37.7932137, "lng": -122.397043}
    }, {
      "name": "San Francisco—Opera Plaza",
      "address": "601 Van Ness, San Francisco, CA 94102",
      "position": {"lat": 37.7813858, "lng": -122.4214063}
    }, {
      "name": "San Francisco—Polk Street",
      "address": "2139 C Polk Street, San Francisco, CA 94109",
      "position": {"lat": 37.7962985418601, "lng": -122.421931365984}
    }, {
      "name": "San Francisco—Potrero",
      "address": "2300 16th Street, Suite 240, San Francisco, CA 94103",
      "position": {"lat": 37.7664712, "lng": -122.4104092}
    }, {
      "name": "San Francisco—Rincon",
      "address": "121 Spear Street, Suite B, San Francisco, CA 94105",
      "position": {"lat": 37.7918879, "lng": -122.392751}
    }, {
      "name": "San Francisco—155 Montgomery",
      "address": "155 Montgomery St, Suite 161, San Francisco, CA 94104",
      "position": {"lat": 37.7907544, "lng": -122.4025524}
    }, {
      "name": "San Francisco—Sloat",
      "address": "1509 Sloat Blvd. , San Francisco, CA 94132",
      "position": {"lat": 37.7330064, "lng": -122.4895859}
    }, {
      "name": "San Francisco—Stonestown",
      "address": "3251 20th Ave. #OP182, San Francisco, CA 94132",
      "position": {"lat": 37.7284706, "lng": -122.4768258}
    }, {
      "name": "San Francisco—Van Ness & Bush",
      "address": "1400 Van Ness Ave., San Francisco, CA 94109",
      "position": {"lat": 37.7886985, "lng": -122.421606}
    }, {
      "name": "San Francisco—West Portal",
      "address": "54 West Portal Avenue, San Francisco, CA 94127",
      "position": {"lat": 37.7403627, "lng": -122.4667485}
    }, {
      "name": "San Jose—Camden Park",
      "address": "2035 Camden Avenue, San Jose, CA 95124",
      "position": {"lat": 37.2619769925419, "lng": -121.934097105257}
    }, {
      "name": "San Jose—El Paseo",
      "address": "1330 El Paseo De Saratoga, San Jose, CA 95130",
      "position": {"lat": 37.2891297108438, "lng": -121.98966342406}
    }, {
      "name": "San Jose—Rose Garden",
      "address": "1295 The Alameda, San Jose, CA 95126",
      "position": {"lat": 37.3319623, "lng": -121.9130908}
    }, {
      "name": "San Jose—S.J. Blossom Hill",
      "address": "1110 Blossom Hill Rd., #20, San Jose, CA 95118",
      "position": {"lat": 37.2506990526817, "lng": -121.875830700876}
    }, {
      "name": "San Jose—Brokaw",
      "address": "1088 E Brokaw Rd, Suite 80, San Jose, CA 95131",
      "position": {"lat": 37.3826620810532, "lng": -121.896021848362}
    }, {
      "name": "San Jose—Santana Row",
      "address": "377 Santana Row, Suite 1130, San Jose, CA 95128",
      "position": {"lat": 37.3201215, "lng": -121.9492478}
    }, {
      "name": "San Jose—Willow Glen",
      "address": "1140 Lincoln Avenue, Suite C, San Jose, CA 95125",
      "position": {"lat": 37.3075158559975, "lng": -121.900279992002}
    }, {
      "name": "San Leandro",
      "address": "1500 East 14th St., San Leandro, CA 94577",
      "position": {"lat": 37.7234876, "lng": -122.1535052}
    }, {
      "name": "San Luis Obispo",
      "address": "1075 Court St., Suite 110, San Luis Obispo, CA 93401",
      "position": {"lat": 35.2809042, "lng": -120.6614541}
    }, {
      "name": "San Mateo—Bay Meadows",
      "address": "1020 Park Place, San Mateo, CA 94403",
      "position": {"lat": 37.5445288247486, "lng": -122.292830150823}
    }, {
      "name": "San Mateo",
      "address": "255 E. 3rd Avenue, San Mateo, CA 94401",
      "position": {"lat": 37.5653461792671, "lng": -122.322794890248}
    }, {
      "name": "San Rafael—Northgate",
      "address": "5800 Northgate Mall, Suite 146, San Rafael, CA 94903",
      "position": {"lat": 38.0039579, "lng": -122.5436925}
    }, {
      "name": "San Rafael",
      "address": "402 Third Street, San Rafael, CA 94901",
      "position": {"lat": 37.9710136, "lng": -122.5178141}
    }, {
      "name": "San Ramon—Bollinger Canyon",
      "address": "11000 Bollinger Canyon Rd, Suite A, San Ramon, CA 94582",
      "position": {"lat": 37.7740656, "lng": -121.9234383}
    }, {
      "name": "San Ramon—Crow Canyon",
      "address": "3121 Crow Canyon Place, Suite C, San Ramon, CA 94583",
      "position": {"lat": 37.7787992, "lng": -121.9696879}
    }, {
      "name": "San Ramon",
      "address": "166 Sunset Drive, San Ramon, CA 94583",
      "position": {"lat": 37.7627216, "lng": -121.9612836}
    }, {
      "name": "Santa Barbara",
      "address": "3905 State Street, R2, Santa Barbara, CA 93105",
      "position": {"lat": 34.4403647257695, "lng": -119.751174997961}
    }, {
      "name": "Santa Clara",
      "address": "3932 Rivermark Plaza, Santa Clara, CA 95054",
      "position": {"lat": 37.3944003, "lng": -121.9458284}
    }, {
      "name": "Santa Clara—El Camino Real",
      "address": "2002 El Camino Real, Suite 20, Santa Clara, CA 95050",
      "position": {"lat": 37.3521426, "lng": -121.9601827}
    }, {
      "name": "Santa Clarita",
      "address": "27047 McBean Parkway, Santa Clarita, CA 91355",
      "position": {"lat": 34.4299251345505, "lng": -118.55879603323}
    }, {
      "name": "Santa Cruz",
      "address": "1409 Pacific Avenue, Santa Cruz, CA 95060",
      "position": {"lat": 36.9750046, "lng": -122.0267323}
    }, {
      "name": "Santa Monica—Montana",
      "address": "1401 Montana Avenue, Santa Monica, CA 90403",
      "position": {"lat": 34.0322796178212, "lng": -118.495209837829}
    }, {
      "name": "Santa Rosa—North Santa Rosa",
      "address": "2500 Mendocino Ave, Santa Rosa, CA 95403",
      "position": {"lat": 38.4653075, "lng": -122.7192408}
    }, {
      "name": "Santa Rosa",
      "address": "650 Fourth Street, Suite 100, Santa Rosa, CA 95404",
      "position": {"lat": 38.4410285, "lng": -122.712433}
    }, {
      "name": "Saratoga",
      "address": "12148 Saratoga-Sunnyvale Rd., Saratoga, CA 95070",
      "position": {"lat": 37.2925997595006, "lng": -122.032260439508}
    }, {
      "name": "Scotts Valley",
      "address": "214 Mt. Hermon Rd., Suite E, Scotts Valley, CA 95066",
      "position": {"lat": 37.0458387, "lng": -122.0271922}
    }, {
      "name": "Seal Beach",
      "address": "12203 Seal Beach Blvd, Seal Beach, CA 90740",
      "position": {"lat": 33.7849417141097, "lng": -118.072107510852}
    }, {
      "name": "Solana Beach",
      "address": "125 Lomas Santa Fe Drive, Solana Beach, CA 92075",
      "position": {"lat": 32.99197093342, "lng": -117.270330897764}
    }, {
      "name": "Sonoma",
      "address": "591 Broadway, Sonoma, CA 95476",
      "position": {"lat": 38.2903167, "lng": -122.4583768}
    }, {
      "name": "Stockton—Stonecreek",
      "address": "5765 Pacific Avenue, Suite C-125, Stockton, CA 95207",
      "position": {"lat": 38.0021423588772, "lng": -121.317091624813}
    }, {
      "name": "Studio City—Studio City",
      "address": "12215 Ventura Blvd, Suite 101, Studio City, CA 91604",
      "position": {"lat": 34.1434, "lng": -118.399}
    }, {
      "name": "Sunnyvale",
      "address": "144 West El Camino Real, Sunnyvale, CA 94087",
      "position": {"lat": 37.3678752, "lng": -122.0332309}
    }, {
      "name": "Tarzana",
      "address": "18973 Ventura Blvd., Tarzana, CA 91356",
      "position": {"lat": 34.17265, "lng": -118.54703}
    }, {
      "name": "Thousand Oaks",
      "address": "595 Moorpark Road, Suite B, Thousand Oaks, CA 91360",
      "position": {"lat": 34.186266, "lng": -118.8754174}
    }, {
      "name": "Thousand Oaks—Westlake Village",
      "address": "3955 Thousand Oaks Boulevard, , Thousand Oaks, CA 91362",
      "position": {"lat": 34.1633712, "lng": -118.8245899}
    }, {
      "name": "Tiburon",
      "address": "1 Blackfield Dr., Suite A, Tiburon, CA 94920",
      "position": {"lat": 37.8993319, "lng": -122.5001221}
    }, {
      "name": "Torrance",
      "address": "2649 Pacific Coast Highway, Torrance, CA 90505",
      "position": {"lat": 33.7918402547208, "lng": -118.332656931916}
    }, {
      "name": "Tustin Crossing",
      "address": "12932 Newport Avenue, Suite 14, Tustin, CA 92780",
      "position": {"lat": 33.7504157019971, "lng": -117.809749801632}
    }, {
      "name": "Vacaville—Nut Tree",
      "address": "1671 E. Monte Vista Rd., Suite 101, Vacaville, CA 95687",
      "position": {"lat": 38.3683467, "lng": -121.963607}
    }, {
      "name": "Ventura",
      "address": "1171 S. Victoria Avenue, Suite E, Ventura, CA 93003",
      "position": {"lat": 34.2638796, "lng": -119.2127368}
    }, {
      "name": "Walnut Creek—Locust Street",
      "address": "1343 Locust Street, Walnut Creek, CA 94596",
      "position": {"lat": 37.8979955, "lng": -122.0619798}
    }, {
      "name": "Walnut Creek—Ygnacio Plaza",
      "address": "1835 Ygnacio Valley Road, Walnut Creek, CA 94598",
      "position": {"lat": 37.917815, "lng": -122.036681}
    }, {
      "name": "Yorba Linda",
      "address": "18353 Imperial Highway, Yorba Linda, CA 92886",
      "position": {"lat": 33.889410635965, "lng": -117.814119815646}
    }];

  // The location of Uluru 37.8216° N, 122.0000° W
  var uluru = {lat: 37.8216, lng: -122.0000};
  // The map, centered at Uluru
  map = new google.maps.Map(
    document.getElementById('map'), {zoom: 7, center: uluru});



  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < locations.length; i++) {
    bounds.extend(locations[i].position);
    locations[i].marker = createMarker(locations[i]);
  }

  map.fitBounds(bounds);
  // The marker, positioned at Uluru
  //var marker = new google.maps.Marker({position: uluru, map: map});

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loadPositions);
  } else {
    $("#nearby").html(`Sorry, geolocation not available`);
  }
}

function createMarker(location) {
  const image = './img/coffee_cup.png';
  const marker = new google.maps.Marker({
    position: location.position,
    map: map,
    title: locations.name,
    icon: image,
    optimized: false
  });
  var info = `<a href="http://maps.apple.com/?daddr=`+location.position.lat+`,`+location.position.lng+`">`+location.name+"</a>";
  var infoWindowOpts = { content: info };
  var infoWindow = new google.maps.InfoWindow(infoWindowOpts);

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(map,marker);
    map.setZoom(10);
    map.setCenter(marker.getPosition());
  });
  google.maps.event.addListener(marker, 'mousedown', function(){
    infoWindow.open(map,marker);
    map.setZoom(10);
    map.setCenter(marker.getPosition());
    $("#selected_location").html(`Selected location: <a href="http://maps.apple.com/?daddr=`+location.position.lat+`,`+location.position.lng+`">`+location.name+" &bull; "+location.address+"</a><br />");

  });
  return marker;
}

function loadPositions(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var distances = [];
  var pos = { "lat": lat, "lng": lon };
  map.setCenter(pos);
  const marker = new google.maps.Marker({
    position: pos,
    map: map
  });
  for (var i = 0; i < locations.length; i++) {
    const d = { "ref": i, "meters": calcDistance(lat, lon, locations[i].position.lat, locations[i].position.lng) };
    distances.push(d);
  }
  distances.sort((a,b)=>a.meters-b.meters);
  $("#nearby").html(`<div class="mt-1">Current location: <a href="http://maps.apple.com/?daddr=`+lat+`,`+lon+`">`+lat+`,`+lon+"</a></div>");
  $("#nearby").append(`<h5 class="mt-2">Nearby locations:</h5>`);
  for (var i = 0; i < 5 && i < distances.length; i++) {
    $("#nearby").append(`&#9749; <a href="http://maps.apple.com/?daddr=`+locations[distances[i].ref].position.lat+`,`+locations[distances[i].ref].position.lng+`">`+locations[distances[i].ref].name+" &bull; "+locations[distances[i].ref].address+"</a><br />");
    locations[distances[i].ref].marker.setIcon('./img/coffee_cup_star.png');
  }
}


function calcDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI/180; // φ, λ in radians
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c; // in metres
}
