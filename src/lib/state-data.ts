export type StateData = {
  name: string;
  abbr: string;
  content: string;
  commonZones: string;
  proneCounties: string;
  insuranceCost: string;
  faqs: { question: string; answer: string }[];
};

export const STATE_DATA: Record<string, StateData> = {
  "alabama": {
    name: "Alabama",
    abbr: "AL",
    content:
      "Alabama faces significant flood risk from both riverine and coastal flooding, sitting at the intersection of multiple vulnerable river basins. The Tennessee River valley in the northern part of the state is particularly prone to flooding, while coastal counties along Mobile Bay and the Gulf of Mexico face hurricane-driven storm surge threats. In 2020, Hurricane Sally brought catastrophic flooding to the Alabama coast with storm surge reaching 9 feet in some areas. The state experiences an average of 7-10 significant flood events per year according to the National Weather Service. Major river systems including the Alabama, Tombigbee, and Coosa rivers regularly overflow their banks during heavy rain events. Mobile County and Baldwin County are consistently among the most flood-damaged areas in the Southeast. FEMA designates large portions of the Mobile-Tensaw River Delta as Special Flood Hazard Areas, and many communities along the Black Warrior River system carry repeated flood loss histories. The state has received over $500 million in FEMA disaster declarations related to flooding in the past two decades. Urban development in the Birmingham metropolitan area has increased impervious surfaces, worsening flash flood risks in Jefferson and Shelby counties.",
    commonZones:
      "Zone A and Zone AE along the Alabama, Tennessee, and Tombigbee rivers; Zone VE along Mobile Bay and Gulf-front communities; Zone X (shaded) for moderate-risk areas in Birmingham and Huntsville metro regions.",
    proneCounties:
      "Mobile County, Baldwin County, Jefferson County, Madison County, Tuscaloosa County",
    insuranceCost:
      "Average annual NFIP premiums range from $600-$1,200 for standard-risk properties. High-risk VE zone properties along the coast can run $2,500-$5,000+ per year. Under Risk Rating 2.0, coastal properties have seen increases of 25-50%.",
    faqs: [
      {
        question: "How common are floods in Alabama?",
        answer:
          "Alabama averages 7-10 significant flood events annually. The state is one of the most flood-prone in the Southeast due to its riverine systems and Gulf Coast exposure. Flash flooding is especially common in urban areas like Birmingham and Huntsville.",
      },
      {
        question: "Do I need flood insurance in Alabama?",
        answer:
          "If your property is in a designated Special Flood Hazard Area and you have a federally backed mortgage, flood insurance is mandatory. Even outside high-risk zones, about 25% of NFIP claims come from moderate-to-low-risk areas.",
      },
      {
        question: "Which Alabama cities flood the most?",
        answer:
          "Mobile, Birmingham, Huntsville, and Tuscaloosa are among the most flood-prone cities. Mobile faces both coastal storm surge and riverine flooding, while Birmingham and Huntsville experience frequent urban flash flooding.",
      },
    ],
  },
  "alaska": {
    name: "Alaska",
    abbr: "AK",
    content:
      "Alaska's flood risk is driven primarily by coastal erosion, ice jam flooding, and permafrost degradation rather than traditional riverine floodplain dynamics. The state has over 33,000 miles of coastline, making it uniquely vulnerable to coastal flooding and erosion. Many rural villages along the Bering Sea and Arctic Ocean coasts face existential threats from rising sea levels and diminishing sea ice. The communities of Shaktoolik, Kivalina, and Newtok are among the most critically threatened, with some facing relocation costs exceeding $100 million. Interior Alaska experiences spring ice jam flooding along the Yukon, Kuskokwim, and Tanana rivers. Anchorage faces flood risk from the Eagle River and Ship Creek drainage basins. Fairbanks and the Tanana Valley regularly contend with spring breakup flooding. Permafrost thaw across northern Alaska is undermining drainage infrastructure and altering watershed hydrology. Alaska has fewer than 40 NFIP-participating communities, partly because many rural areas lack the engineering infrastructure to meet program requirements. FEMA flood maps cover limited areas, meaning much of Alaska's flood risk is unmapped and underinsured.",
    commonZones:
      "Limited FEMA mapping across most of the state. Where mapped, Zone A along the Yukon, Kuskokwim, and Tanana rivers; Zone V along exposed Bering Sea and Arctic coastlines. Much of rural Alaska falls into unmapped high-risk areas.",
    proneCounties:
      "Fairbanks North Star Borough, Matanuska-Susitna Borough, Kenai Peninsula Borough, Northwest Arctic Borough, Yukon-Koyukuk Census Area",
    insuranceCost:
      "Flood insurance availability is limited in Alaska. Where available, NFIP premiums typically range $500-$1,500 for moderate-risk areas. Coastal erosion zones may see premiums exceeding $3,000. Private flood insurance options are sparse in rural communities.",
    faqs: [
      {
        question: "Does Alaska really flood given how cold it is?",
        answer:
          "Yes. Alaska faces unique flood risks including coastal erosion from storm surge, ice jam flooding during spring breakup, and riverine flooding in interior valleys. Climate change is accelerating permafrost thaw, which increases flood vulnerability across the state.",
      },
      {
        question: "Can I get flood insurance in rural Alaska?",
        answer:
          "Flood insurance availability is limited. Fewer than 40 communities participate in the NFIP. Many villages lack mapped floodplains entirely, making it difficult to obtain coverage even when flood risk is high.",
      },
      {
        question: "Which areas of Alaska are most at risk?",
        answer:
          "Coastal villages like Kivalina, Shaktoolik, and Newtok face existential threats from erosion and flooding. Interior communities along the Yukon and Kuskokwim rivers experience regular spring ice jam flooding.",
      },
    ],
  },
  "arizona": {
    name: "Arizona",
    abbr: "AZ",
    content:
      "Arizona's flood risk is defined by desert flash flooding, where fast-moving walls of water can develop within minutes of heavy rainfall. The arid climate and sparse vegetation mean the soil absorbs very little water, creating dangerous runoff conditions. The Salt River, Gila River, and Verde River basins are the primary flood-prone corridors in central Arizona. Phoenix sits in a flood-prone valley where even moderate monsoon storms can overwhelm drainage infrastructure. The monsoon season, running from June through September, produces the state's most dangerous flood events. In 2014, a flash flood in Sedona killed a family of six and highlighted the extreme danger of canyon flooding. Arizona's slot canyons, particularly in the Navajo Nation and along the Grand Canyon, are exceptionally dangerous during flash flood events with walls of water up to 40 feet high documented in Antelope Canyon. Tucson and Pima County experience regular flooding along the Rillito and Santa Cruz River corridors. Yuma, located at the confluence of the Colorado and Gila rivers, faces both riverine and agricultural return flow flooding. The state has experienced over $2 billion in flood-related damages since 2000.",
    commonZones:
      "Zone A and Zone AE along the Salt, Gila, and Santa Cruz rivers; Zone X (shaded) for moderate-risk flash flood corridors in Phoenix and Tucson; Zone AH for shallow flooding in detention basin areas.",
    proneCounties:
      "Maricopa County, Pima County, Yavapai County, Coconino County, Mohave County",
    insuranceCost:
      "NFIP premiums in Arizona typically range $400-$900 for standard-risk properties. Flash flood-prone areas near river corridors can cost $1,200-$2,800 annually. Properties in the Phoenix floodplain have seen increases under Risk Rating 2.0.",
    faqs: [
      {
        question: "Why does a desert state like Arizona flood?",
        answer:
          "Arizona's arid soil and sparse vegetation absorb very little water, so even brief monsoon storms create dangerous flash flooding. Slot canyons amplify this effect with walls of water developing within minutes.",
      },
      {
        question: "When is flood season in Arizona?",
        answer:
          "The monsoon season from mid-June through September is Arizona's primary flood period. September and October also see flash flood risk from residual moisture and early winter storms.",
      },
      {
        question: "Is Phoenix at risk for flooding?",
        answer:
          "Yes, Phoenix sits in the Salt River Valley and experiences regular flash flooding during monsoon season. Several neighborhoods have experienced significant flood damage in recent decades.",
      },
    ],
  },
  "arkansas": {
    name: "Arkansas",
    abbr: "AR",
    content:
      "Arkansas faces substantial flood risk from its extensive river system, which includes portions of the Mississippi, Arkansas, White, and Ouachita river basins. The Arkansas River runs the full length of the state, and its floodplain encompasses Little Rock, North Little Rock, Fort Smith, and Pine Bluff. In 2019, historic flooding along the Arkansas River caused over $2 billion in damage with levee overtopping and failures in multiple locations. The White River basin in northeastern Arkansas is one of the most flood-prone regions in the Mid-South, with communities like Newport and Batesville experiencing repeated inundation. West Memphis and Crittenden County along the Mississippi River have historically severe flood exposure. The state has over 400 miles of federally maintained levees along the Mississippi River alone. Flash flooding is a growing concern in the Ozark Mountains of northwest Arkansas, where steep terrain accelerates runoff. Bentonville and the fast-growing Northwest Arkansas corridor face increasing urban flood risk as development expands into formerly rural drainage areas. Arkansas has over 900 NFIP-participating communities, one of the highest counts in the nation.",
    commonZones:
      "Zone A and Zone AE along the Arkansas, Mississippi, White, and Ouachita rivers; Zone X (shaded) for moderate-risk areas in Little Rock and Northwest Arkansas; Zone AO for shallow flooding in low-lying agricultural areas.",
    proneCounties:
      "Pulaski County, Crittenden County, Jefferson County, Sebastian County, Independence County",
    insuranceCost:
      "NFIP premiums typically range $500-$1,000 for standard-risk properties. Riverfront properties in Little Rock and Pine Bluff can run $1,500-$3,500 annually. Levee systems provide protection but levee failure risk increases premiums in adjacent areas.",
    faqs: [
      {
        question: "How often does Arkansas experience major floods?",
        answer:
          "Arkansas experiences significant flooding every 3-5 years on average. The 2019 Arkansas River flood caused over $2 billion in damage. Levee systems along the Mississippi and Arkansas rivers provide protection but are not failproof.",
      },
      {
        question: "Do I need flood insurance if I live near a levee?",
        answer:
          "Yes. Levees provide protection but do not eliminate flood risk. FEMA considers levee failure probability when mapping flood zones, and many properties near levees are still in Special Flood Hazard Areas.",
      },
      {
        question: "Which part of Arkansas floods most?",
        answer:
          "The eastern lowlands along the Mississippi and Arkansas rivers experience the most severe flooding. Crittenden, Jefferson, and Pulaski counties are consistently among the most flood-affected areas.",
      },
    ],
  },
  "california": {
    name: "California",
    abbr: "CA",
    content:
      "California faces an enormous flood risk landscape combining riverine flooding, atmospheric river events, urban flash flooding, coastal storm surge, and aging infrastructure vulnerabilities. The Central Valley is one of the most flood-prone regions in the United States, with the Sacramento and San Joaquin river systems carrying runoff from the Sierra Nevada. Sacramento sits below the confluence of the American and Sacramento rivers and has been called the most flood-risk major city in America. In January 2023, atmospheric river storms caused widespread flooding across California damaging thousands of properties and causing over $3 billion in damage. The levee system protecting the Central Valley includes over 1,600 miles of levees, many in deteriorating condition. An Army Corps study found over 80% of California's levees do not meet current safety standards. Southern California faces flash flood risk from debris flows in recently burned wildfire areas, as demonstrated in Montecito in 2018 when a debris flow killed 23 people. San Francisco and Los Angeles both have extensive urban flood risk from impervious surfaces overwhelming storm drain systems. The state has invested over $3 billion in flood infrastructure since 2000 but estimates $30 billion or more is needed.",
    commonZones:
      "Zone A and Zone AE along the Sacramento, San Joaquin, American, and Los Angeles rivers; Zone X (shaded) for moderate-risk areas in urban valleys; Zone AR for areas protected by levees; Zone VE along the coast.",
    proneCounties:
      "Sacramento County, San Joaquin County, Fresno County, Kern County, Los Angeles County",
    insuranceCost:
      "NFIP premiums range from $600-$1,800 for standard-risk properties. Sacramento floodplain properties can run $2,500-$5,000+ annually. Coastal properties in Los Angeles and San Diego face storm surge premiums of $3,000-$8,000.",
    faqs: [
      {
        question: "Does California really flood that much?",
        answer:
          "California has some of the highest flood risk in the country. The Central Valley alone faces potential damages exceeding $100 billion from a major levee-failure event. The state averages multiple flood events per year driven by atmospheric rivers.",
      },
      {
        question: "Why is Sacramento considered so flood-prone?",
        answer:
          "Sacramento sits at the confluence of two major rivers in a low-lying valley below sea level. FEMA and the Army Corps of Engineers have identified Sacramento as a top national flood risk priority.",
      },
      {
        question: "Do I need flood insurance in Los Angeles?",
        answer:
          "If you are in a designated flood zone, yes. Even outside those zones, Los Angeles faces flash flood risk from urban runoff, especially near recent wildfire burn scars. About 20% of California flood claims come from outside high-risk zones.",
      },
    ],
  },
  "colorado": {
    name: "Colorado",
    abbr: "CO",
    content:
      "Colorado's flood risk centers on urban flash flooding, post-wildfire debris flows, and extreme events along the Front Range. The September 2013 Colorado floods were the state's most devastating, when a slow-moving storm dumped over 20 inches of rain on parts of Boulder County creating a flood zone 200 miles long and killing 10 people with over $2 billion in damage. The Big Thompson Canyon has experienced catastrophic floods twice in 1976 and 2013. Denver faces increasing flash flood risk as urbanization expands impervious surfaces across the South Platte River watershed. Colorado's wildfire burn scar areas create extreme debris flow risk, as demonstrated by the 2021 Marshall Fire in Boulder County. The state's unique geography from 14,000-foot peaks to 3,500-foot plains within 60 miles creates rapid concentrated runoff events. Larimer County and the Cache la Poudre River corridor have experienced repeated flood events. El Paso County including Colorado Springs faces flash flood risk from the Arkansas River watershed and Fountain Creek. While Colorado has fewer NFIP-participating communities due to lower population density, the state averages 3-5 significant flood events annually with flood damage costs exceeding $5 billion since 2000.",
    commonZones:
      "Zone A and Zone AE along the South Platte, Arkansas, and Cache la Poudre rivers; Zone X (shaded) for moderate-risk areas in Denver and Front Range communities; Zone AH for shallow flooding in post-burn scar areas.",
    proneCounties:
      "Boulder County, Larimer County, Jefferson County, El Paso County, Weld County",
    insuranceCost:
      "NFIP premiums typically range $500-$1,200 for standard-risk properties. River corridor properties along the South Platte and Arkansas rivers can run $1,500-$3,000 annually. Post-wildfire flood zones have seen significant premium increases.",
    faqs: [
      {
        question: "How does Colorado flood given it is a dry state?",
        answer:
          "Colorado's extreme terrain and intense precipitation events create dangerous flash flooding despite its semi-arid climate. The 2013 floods demonstrated how concentrated rainfall in narrow canyons can be catastrophic.",
      },
      {
        question: "Is Denver at flood risk?",
        answer:
          "Yes. Denver sits in the South Platte River watershed and experiences urban flash flooding. The 2013 floods affected parts of the Denver metro, and continued development increases impervious surfaces and flood risk.",
      },
      {
        question: "Do I need flood insurance after a wildfire?",
        answer:
          "Absolutely. Burn scars dramatically increase flood and debris flow risk for years after a wildfire. Even moderate rainfall on burned terrain can trigger dangerous debris flows.",
      },
    ],
  },
  "connecticut": {
    name: "Connecticut",
    abbr: "CT",
    content:
      "Connecticut faces flood risk from coastal storm surge along Long Island Sound, riverine flooding in the Connecticut and Housatonic river valleys, and increasing urban flash flooding. Hurricane Sandy in 2012 caused over $360 million in flood damage with coastal communities from Greenwich to New London experiencing severe storm surge. The Naugatuck River and its tributaries flood regularly, and Waterbury, Naugatuck, and Beacon Falls have long flood histories. In August 2011, Hurricane Irene caused widespread flooding with the Mill River in Hamden and the Quinnipiac River reaching historic levels. Flash flooding along the I-95 corridor in Fairfield County has caused repeated transportation disruptions. Connecticut has over 250 NFIP-participating communities, and the state's dense development means even moderate flooding affects significant populations. Coastal communities face tidal flooding, storm surge, and sea level rise projected to increase flood frequency by 300-400% by 2050. Aging stormwater systems in Hartford, New Haven, and Bridgeport struggle with increasingly intense rainfall events.",
    commonZones:
      "Zone AE along the Connecticut, Housatonic, Naugatuck, and Mill rivers; Zone VE along Long Island Sound from Greenwich to New London; Zone X (shaded) for moderate-risk areas in Hartford and New Haven.",
    proneCounties:
      "Fairfield County, New Haven County, Hartford County, New London County, Litchfield County",
    insuranceCost:
      "NFIP premiums range from $800-$1,800 for standard-risk properties. Coastal VE zone properties along Long Island Sound can run $3,000-$7,000+ annually. Under Risk Rating 2.0, coastal premiums in Fairfield County have increased 30-60%.",
    faqs: [
      {
        question: "How bad is coastal flooding in Connecticut?",
        answer:
          "Connecticut faces serious coastal flood risk along Long Island Sound. Hurricane Sandy caused over $360 million in damage, and sea level rise will dramatically increase flood frequency by 2050.",
      },
      {
        question: "Do inland areas of Connecticut flood?",
        answer:
          "Yes. The Connecticut, Housatonic, and Naugatonic rivers all have significant flood histories. Urban areas like Hartford and New Haven experience flash flooding from overwhelmed stormwater systems during heavy rain.",
      },
      {
        question: "How much does flood insurance cost in Connecticut?",
        answer:
          "Inland standard-risk properties may pay $800-$1,200 annually, while coastal VE zone properties can pay $3,000-$7,000+. Risk Rating 2.0 has significantly increased premiums for many coastal properties.",
      },
    ],
  },
  "delaware": {
    name: "Delaware",
    abbr: "DE",
    content:
      "Delaware faces significant flood risk from coastal storm surge, sea level rise, and tidal flooding along its low-lying coastline. As the second-smallest state and one of the lowest in elevation, Delaware has a disproportionately large portion of its land area within flood-prone zones. The Delaware Bay and Atlantic coast areas including Rehoboth Beach, Dewey Beach, and Bethany Beach are highly vulnerable to storm surge. Delaware experienced severe flooding from Hurricane Sandy in 2012 and Tropical Storm Lee in 2011. The Christina River and Brandywine Creek in the Wilmington area create significant urban flood risk. Kent County including Dover faces riverine flood risk along the St. Jones River and Murderkill River. Sussex County's agricultural lands along the Nanticoke River experience seasonal flooding. The state has over 100 NFIP-participating communities and has been proactive in floodplain management. Delaware's flat topography means floodwaters spread over wide areas. The state's position at the mouth of the Delaware River makes it vulnerable to compound flooding from simultaneous storm surge and river flooding.",
    commonZones:
      "Zone AE along the Delaware Bay, Atlantic coast, Christina River, and Brandywine Creek; Zone VE for coastal high-hazard areas in Rehoboth and Bethany Beach; Zone X (shaded) for moderate-risk areas in Wilmington and Dover.",
    proneCounties:
      "New Castle County, Kent County, Sussex County",
    insuranceCost:
      "NFIP premiums range from $700-$1,500 for standard-risk properties. Coastal VE zone properties along the Atlantic coast can run $2,500-$6,000+ annually. The state's low elevation means moderate-risk properties often have higher premiums than comparable properties elsewhere.",
    faqs: [
      {
        question: "Why is Delaware so flood-prone?",
        answer:
          "Delaware's low elevation, flat topography, and extensive coastline make it one of the most flood-vulnerable states per square mile. Much of the state sits near sea level, and its position at the mouth of the Delaware River creates compound flood risk.",
      },
      {
        question: "Does Delaware get hurricanes?",
        answer:
          "Delaware has been impacted by numerous tropical systems including Hurricane Sandy which caused over $100 million in flood damage. The state is also vulnerable to nor'easters which can produce coastal flooding comparable to hurricanes.",
      },
      {
        question: "Is the whole state a flood zone?",
        answer:
          "Not the entire state, but a significant portion. Coastal areas and river valleys are in high-risk zones, while inland areas have moderate risk. Delaware's low elevation means even properties outside designated flood zones face meaningful risk.",
      },
    ],
  },
  "florida": {
    name: "Florida",
    abbr: "FL",
    content:
      "Florida is one of the most flood-prone states in the nation, facing threats from hurricanes, tropical storms, sea level rise, coastal erosion, and riverine flooding. The state's flat topography and low elevation, with much of Florida less than 10 feet above sea level, create flood risk across enormous areas. Hurricane Andrew in 1992, Hurricane Irma in 2017, and Hurricane Ian in 2022 all caused catastrophic flooding. Ian produced over $100 billion in total damage including extensive flooding in Fort Myers, Naples, and the Tampa Bay area. South Florida faces chronic tidal flooding that increases with sea level rise. Miami Beach has invested over $600 million in stormwater infrastructure to address sunny-day flooding. The Kissimmee River basin and Apalachicola River are major riverine flood corridors. Tampa Bay is considered one of the most hurricane-vulnerable metro areas nationally. Jacksonville faces flood risk from the St. Johns River which reverses flow during storms. The state has over 800 NFIP-participating communities and leads the nation with over 2.2 million policies in force. Florida's flood insurance market has been in crisis with rates increasing under Risk Rating 2.0 and many private insurers exiting.",
    commonZones:
      "Zone AE along coastal rivers and tidal waterways; Zone VE along the Atlantic and Gulf coast from the Keys to the Panhandle; Zone AH for ponding flood areas in South Florida; Zone X (shaded) for moderate-risk inland areas.",
    proneCounties:
      "Miami-Dade County, Broward County, Lee County, Hillsborough County, Duval County",
    insuranceCost:
      "Florida NFIP premiums average $600-$1,200 for standard-risk properties but coastal and canal-front properties frequently pay $3,000-$10,000+. Hurricane Ian dramatically increased insurance costs in Southwest Florida with some properties seeing 50-100% premium increases.",
    faqs: [
      {
        question: "Does every property in Florida need flood insurance?",
        answer:
          "Not every property, but it is strongly recommended. Over 2 million Florida properties have NFIP policies. About 25% of NFIP claims come from outside high-risk zones due to Florida's flat terrain and tropical weather patterns.",
      },
      {
        question: "Is Florida flood insurance getting more expensive?",
        answer:
          "Yes, substantially. Risk Rating 2.0 has increased premiums for many properties, particularly coastal and canal-front homes. Some properties have seen increases of 50-100%. Private flood insurance has also become more expensive and scarce.",
      },
      {
        question: "Which Florida cities flood the most?",
        answer:
          "Miami, Fort Lauderdale, Tampa, Jacksonville, and Naples are among the most flood-prone. Miami and Fort Lauderdale face chronic tidal flooding, while Tampa and Naples are highly vulnerable to hurricane storm surge.",
      },
    ],
  },
  "georgia": {
    name: "Georgia",
    abbr: "GA",
    content:
      "Georgia faces flood risk from Atlantic coastal storm surge, riverine flooding along the Savannah, Chattahoochee, and Flint rivers, and increasing urban flash flooding in the Atlanta metro. Hurricane Matthew in 2016 caused severe flooding in southeast Georgia with the Savannah River reaching its highest level in over 80 years and causing $100 million in damage. Hurricane Irma in 2017 brought widespread flooding across the state. The Atlanta metro has experienced rapid urbanization that has dramatically increased flash flood risk with major events in 2009, 2017, and 2021 causing hundreds of millions in damage. The Chattahoochee River regularly floods its valley through Cobb, Fulton, and Muscogee counties. Valdosta and Lowndes County in south Georgia face chronic flooding along the Withlacoochee River. Augusta and Richmond County experience significant flood risk along the Savannah River. The state has over 600 NFIP-participating communities and has received over $1 billion in FEMA flood-related disaster declarations since 2000. Georgia's coastal plain has extensive wetlands and tidal marshes that provide natural flood buffering, but development pressure threatens these critical buffers.",
    commonZones:
      "Zone AE along the Savannah, Chattahoochee, Flint, and Oconee rivers; Zone VE along the Atlantic coast from Savannah to St. Marys; Zone X (shaded) for moderate-risk areas in metro Atlanta; Zone A for the Withlacoochee River in south Georgia.",
    proneCounties:
      "Fulton County, Chatham County, Glynn County, Lowndes County, Muscogee County",
    insuranceCost:
      "NFIP premiums range from $500-$1,200 for standard-risk properties. Coastal VE zone properties along Savannah and the Golden Isles can run $2,500-$5,000 annually. Chattahoochee River corridor properties near Atlanta may pay $1,200-$3,000.",
    faqs: [
      {
        question: "Does Atlanta flood?",
        answer:
          "Yes. Metro Atlanta has experienced significant flooding events including major damage in 2009 and 2021. Urbanization has increased impervious surfaces, overwhelming stormwater systems during heavy rain.",
      },
      {
        question: "How bad is coastal flooding in Georgia?",
        answer:
          "Georgia's coast faces serious storm surge risk. Hurricane Matthew produced Savannah River flooding not seen in 80+ years. Sea level rise is increasing tidal flooding frequency along the barrier islands.",
      },
      {
        question: "Do I need flood insurance in Georgia?",
        answer:
          "If you are in a designated flood zone with a federally backed mortgage, yes. Even outside high-risk zones, metro Atlanta alone has experienced hundreds of millions in flood damage over the past two decades.",
      },
    ],
  },
  "hawaii": {
    name: "Hawaii",
    abbr: "HI",
    content:
      "Hawaii faces unique flood risks driven by volcanic terrain, steep valleys, and exposure to Pacific storms and tsunamis. Flash flooding is the state's most common and dangerous hazard as steep mountain slopes channel rainfall into narrow valleys with little warning. The Hilo area on the Big Island has a long history of devastating floods including a 1929 flood that killed 16 people. Kauai is particularly vulnerable with a record 49.7 inches of rain falling in 24 hours on Mount Waialeale in April 2018, causing catastrophic flooding that destroyed the Ka Loko Dam and killed four people. Oahu faces flood risk from urban stream systems including the Anahulu, Kapunahala, and Maunalua Bay watersheds. The Wailuku River on the Big Island and Hanalei River on Kauai regularly flood during heavy rain events. Coastal flooding from high surf events and tsunamis is a persistent concern. Sea level rise projections of 1-3 feet by 2060 threaten low-lying coastal areas, airports, and military installations including Pearl Harbor. The state has approximately 70 NFIP-participating communities. Hawaii's unique geology including lava tubes and porous volcanic rock complicates flood prediction.",
    commonZones:
      "Zone A and Zone AE along major stream valleys on each island; Zone X (shaded) for moderate-risk areas in Honolulu and Hilo; Zone VE along exposed coastlines; Zone AH for ponding areas on low-lying coastal plains.",
    proneCounties:
      "Hawaii County, Kauai County, City and County of Honolulu, Maui County",
    insuranceCost:
      "NFIP premiums range from $600-$1,500 for standard-risk properties. Coastal properties in Hilo, Honolulu, and along Kauai's north shore can run $2,000-$5,000+ annually. Limited land area and high development pressure drive higher-than-average premiums.",
    faqs: [
      {
        question: "Why does it flood in Hawaii?",
        answer:
          "Hawaii's steep volcanic terrain concentrates rainfall into narrow valleys, creating dangerous flash floods with little warning. Mount Waialeale on Kauai is one of the wettest spots on Earth. Coastal areas also face tidal flooding, storm surge, and tsunami risk.",
      },
      {
        question: "Is Honolulu at flood risk?",
        answer:
          "Yes. Honolulu faces flood risk from urban stream flooding, coastal storm surge, and sea level rise. Low-lying areas near Pearl Harbor and Waikiki are particularly vulnerable to future sea level rise.",
      },
      {
        question: "Can tsunamis cause flooding in Hawaii?",
        answer:
          "Yes. The 1946 and 1960 tsunamis caused devastating flooding and loss of life. While warning systems have improved, the physical flood risk from a major tsunami remains serious for coastal communities statewide.",
      },
    ],
  },
  "idaho": {
    name: "Idaho",
    abbr: "ID",
    content:
      "Idaho's flood risk is driven primarily by spring snowmelt, riverine flooding, and flash flooding in mountainous terrain. The Boise River regularly reaches flood stage during spring runoff, with the 1943 and 1997 floods causing significant damage in the Treasure Valley. The Snake River floods its extensive plain through southern Idaho, affecting communities from Twin Falls to Idaho Falls. North Idaho faces flood risk from the Kootenai, Coeur d'Alene, and Pend Oreille rivers, with the 2015 Kootenai River flood causing over $30 million in damage. The Boise area has experienced increasing urban flash flood risk as rapid development in Ada and Canyon counties expands into former agricultural lands. In March 2017, rapid snowmelt combined with heavy rain caused record flooding along the Boise River forcing evacuations and causing tens of millions in damage. Tribal reservations in Idaho face disproportionate flood risk due to aging infrastructure and limited resources. The state has over 200 NFIP-participating communities with extensive floodplain mapping throughout river systems.",
    commonZones:
      "Zone A and Zone AE along the Snake, Boise, Kootenai, and Salmon rivers; Zone X (shaded) for moderate-risk areas in Boise and Idaho Falls; Zone AH for shallow flooding along agricultural drainage areas.",
    proneCounties:
      "Ada County, Canyon County, Bonneville County, Kootenai County, Nez Perce County",
    insuranceCost:
      "NFIP premiums typically range $400-$900 for standard-risk properties. River corridor properties along the Snake and Boise rivers may pay $1,000-$2,500 annually. Spring snowmelt flooding has historically been less costly than coastal flooding but premiums are increasing.",
    faqs: [
      {
        question: "When does Idaho flood?",
        answer:
          "Spring snowmelt from March through June is Idaho's primary flood season. Rapid warming combined with rain on snow can accelerate runoff. Urban flash flooding also occurs during summer thunderstorms in the Boise area.",
      },
      {
        question: "Is Boise at flood risk?",
        answer:
          "Yes. Boise sits in the Treasure Valley along the Boise River which has a significant flood history. The 2017 flood forced evacuations and caused extensive damage. Rapid development has increased flash flood risk.",
      },
      {
        question: "Do I need flood insurance in Idaho?",
        answer:
          "If you are in a designated Special Flood Hazard Area, yes. Even outside high-risk zones, spring snowmelt and urban flash flooding create real risk. About 25% of flood claims come from outside high-risk zones.",
      },
    ],
  },
  "illinois": {
    name: "Illinois",
    abbr: "IL",
    content:
      "Illinois faces significant flood risk from the Mississippi, Illinois, Des Plaines, and Fox rivers, as well as urban flash flooding in the Chicago metro. The state has experienced numerous billion-dollar flood events. The 2019 Illinois River flood set record levels and caused over $1 billion in damage. The Des Plaines River corridor northwest of Chicago is one of the most flood-prone areas in the Midwest, with Des Plaines, Elgin, and Joliet experiencing repeated inundation. Chicago's aging combined sewer system causes basement and street flooding during heavy rain events. A 2023 storm dropped over 5 inches in one hour flooding hundreds of homes. The Mississippi River creates extensive risk for western Illinois communities, with Quincy, Alton, and Cairo experiencing major flood events in 2011, 2019, and 2020. The Fox River valley through Kane and McHenry counties faces both riverine and flash flood risk. Southern Illinois including the Cache River and Big Muddy River basins experiences seasonal flooding. The state has over 1,200 NFIP-participating communities and invested $4.3 billion in the TARP deep tunnel project for stormwater management in metropolitan Chicago.",
    commonZones:
      "Zone A and Zone AE along the Mississippi, Illinois, Des Plaines, and Fox rivers; Zone X (shaded) for moderate-risk areas throughout metro Chicago; Zone AO for shallow flooding in agricultural lowlands; Zone AR for levee-protected areas along the Mississippi.",
    proneCounties:
      "Cook County, Kane County, DuPage County, Madison County, Peoria County",
    insuranceCost:
      "NFIP premiums typically range $500-$1,200 for standard-risk properties. Riverfront properties along the Des Plaines and Fox rivers can run $1,500-$3,500 annually. Chicago basement flooding risk has driven premium increases in urban neighborhoods.",
    faqs: [
      {
        question: "Does Chicago flood?",
        answer:
          "Yes. Chicago's combined sewer system regularly causes basement and street flooding during heavy rain. The TARP deep tunnel project has reduced but not eliminated risk. The Des Plaines River also floods communities northwest of the city.",
      },
      {
        question: "How bad are Illinois River floods?",
        answer:
          "The 2019 flood set record levels and caused over $1 billion in damage across the river valley. Communities like Peoria, Pekin, and Lacon have experienced repeated major floods along one of the most flood-prone rivers in the Midwest.",
      },
      {
        question: "Is flood insurance expensive in Illinois?",
        answer:
          "Inland standard-risk properties may pay $500-$1,000 annually, while riverfront and flood-prone urban areas can run $1,500-$3,500. Chicago properties with basement flood risk have seen premium increases under Risk Rating 2.0.",
      },
    ],
  },
  "indiana": {
    name: "Indiana",
    abbr: "IN",
    content:
      "Indiana faces flood risk from the Wabash, Ohio, White, and Tippecanoe rivers, as well as urban flash flooding in Indianapolis. The Wabash River, Indiana's longest river, regularly floods its broad valley affecting communities from Terre Haute to Lafayette to Peru. In 2008, severe flooding along the White River caused extensive damage in Indianapolis, with the city experiencing its worst flood since 1913. The Ohio River creates significant risk for southeastern Indiana communities, with Lawrenceburg, Madison, and Jeffersonville experiencing repeated inundation. Flash flooding is a growing concern in Indianapolis as urbanization increases impervious surfaces. The 2008 Midwest floods caused over $1 billion in damage across Indiana. The state continues to experience significant flood events every 2-4 years. Indiana has over 600 NFIP-participating communities and has invested in flood mitigation through the Department of Natural Resources Floodplain Management Program. Flood risk is expected to increase with climate change-driven intensification of rainfall events.",
    commonZones:
      "Zone A and Zone AE along the Wabash, Ohio, White, and Tippecanoe rivers; Zone X (shaded) for moderate-risk areas in Indianapolis and Fort Wayne; Zone AO for shallow flooding in agricultural lowlands; Zone AR for levee-protected areas.",
    proneCounties:
      "Marion County, Vanderburgh County, Allen County, Vigo County, Madison County",
    insuranceCost:
      "NFIP premiums typically range $450-$1,000 for standard-risk properties. Riverfront properties along the Wabash and Ohio rivers can run $1,200-$3,000 annually. Urban Indianapolis properties face moderate flood risk with premiums from $600-$1,500.",
    faqs: [
      {
        question: "How often does Indiana flood?",
        answer:
          "Indiana experiences significant flooding every 2-4 years on average. The Wabash, Ohio, and White rivers all have long flood histories. The 2008 Midwest floods were among the worst in state history.",
      },
      {
        question: "Does Indianapolis flood?",
        answer:
          "Yes. Indianapolis has experienced multiple significant flood events including major damage in 2008. The White River and Fall Creek flow through the city, and urban development has increased flash flood risk.",
      },
      {
        question: "Is flood insurance required in Indiana?",
        answer:
          "Flood insurance is required for properties in designated Special Flood Hazard Areas with federally backed mortgages. About 25% of NFIP claims in Indiana come from moderate-to-low-risk areas.",
      },
    ],
  },
  "iowa": {
    name: "Iowa",
    abbr: "IA",
    content:
      "Iowa faces substantial flood risk from the Missouri, Mississippi, Des Moines, Cedar, and Iowa rivers. The 2008 Iowa floods caused catastrophic damage, particularly to Cedar Rapids where the Cedar River reached record levels inundating over 10 square miles and causing over $5 billion in damage. The Des Moines Water Works was knocked offline leaving 250,000 people without drinking water for nearly two weeks. The Missouri River created massive flooding in western Iowa in 2011 displacing thousands. The 2019 flooding along both rivers caused over $2 billion in damage with many communities experiencing repeated inundation. Cedar Rapids has invested over $750 million in flood protection infrastructure since 2008 including a new flood control system with permanent walls and deployable gates. Iowa has over 700 NFIP-participating communities and has been a leader in floodplain management and buyout programs. The state's agricultural landscape means flooding affects not only communities but also extensive cropland. Climate projections suggest Iowa's flood risk will increase significantly as precipitation events become more intense.",
    commonZones:
      "Zone A and Zone AE along the Missouri, Mississippi, Cedar, Des Moines, and Iowa rivers; Zone X (shaded) for moderate-risk areas throughout the state; Zone AR for levee-protected areas along the Missouri and Mississippi.",
    proneCounties:
      "Linn County, Polk County, Pottawattamie County, Scott County, Woodbury County",
    insuranceCost:
      "NFIP premiums range from $400-$900 for standard-risk properties. Riverfront properties in Cedar Rapids and Des Moines can run $1,200-$3,000 annually. Post-2008 mitigation improvements have reduced risk in some areas but premiums remain elevated.",
    faqs: [
      {
        question: "How bad were the 2008 Iowa floods?",
        answer:
          "The 2008 floods were Iowa's worst natural disaster in modern history. Cedar Rapids was inundated causing over $5 billion in damage. Des Moines lost its water supply for nearly two weeks. Over 40,000 people were displaced.",
      },
      {
        question: "Is Cedar Rapids protected from flooding now?",
        answer:
          "Cedar Rapids has invested over $750 million in a comprehensive flood control system designed to protect against a 500-year flood event, significantly reducing but not eliminating flood risk for the city.",
      },
      {
        question: "Do I need flood insurance in Iowa?",
        answer:
          "If you are in a designated flood zone with a federally backed mortgage, yes. Iowa's flood risk extends well beyond designated zones and about 25% of NFIP claims come from outside high-risk areas.",
      },
    ],
  },
  "kansas": {
    name: "Kansas",
    abbr: "KS",
    content:
      "Kansas faces flood risk from the Kansas, Missouri, Arkansas, and Smoky Hill rivers, as well as significant urban flash flooding in the Kansas City and Wichita metro areas. The 1993 and 2011 Missouri River floods caused extensive damage in northeastern Kansas communities. Leavenworth, Atchison, and Doniphan counties were particularly affected. The Arkansas River floods its broad valley through south-central Kansas affecting Wichita, Arkansas City, and Winfield. Wichita sits at the confluence of the Arkansas, Little Arkansas, and Chisholm creeks with the 1993 and 2016 floods causing hundreds of millions in damage. Flash flooding is the state's most common and deadly hazard, particularly in the Flint Hills region. The 2016 Topeka floods caused over $100 million in damage from a single storm. Kansas has over 500 NFIP-participating communities. The state's agricultural economy makes flood impacts particularly far-reaching, as flooding can destroy crops, livestock, and rural infrastructure across wide areas.",
    commonZones:
      "Zone A and Zone AE along the Kansas, Missouri, Arkansas, and Smoky Hill rivers; Zone X (shaded) for moderate-risk areas in Wichita, Topeka, and Kansas City; Zone AO for shallow flooding in agricultural lowlands.",
    proneCounties:
      "Sedgwick County, Douglas County, Shawnee County, Leavenworth County, Wyandotte County",
    insuranceCost:
      "NFIP premiums typically range $400-$800 for standard-risk properties. Riverfront properties along the Kansas and Missouri rivers can run $1,000-$2,500 annually. Wichita flood zone properties have seen increases under Risk Rating 2.0.",
    faqs: [
      {
        question: "Does Kansas flood often?",
        answer:
          "Kansas experiences significant flooding every 3-5 years. Flash flooding is the state's most common hazard while major river floods along the Missouri, Kansas, and Arkansas rivers occur less frequently but cause more damage.",
      },
      {
        question: "Is Wichita at flood risk?",
        answer:
          "Yes. Wichita faces substantial flood risk at the confluence of the Arkansas River, Little Arkansas River, and Chisholm Creek. The 1993 and 2016 floods caused hundreds of millions in damage.",
      },
      {
        question: "How much does flood insurance cost in Kansas?",
        answer:
          "Standard-risk properties typically pay $400-$800 annually. Riverfront and high-risk properties can pay $1,000-$2,500. Costs are relatively affordable compared to coastal states but are increasing under Risk Rating 2.0.",
      },
    ],
  },
  "kentucky": {
    name: "Kentucky",
    abbr: "KY",
    content:
      "Kentucky faces severe flood risk from the Ohio River which creates an extensive floodplain across the northern part of the state, as well as flash flooding in eastern Kentucky's mountainous regions. The Ohio River floodplain includes Louisville, Covington, and Paducah making the state highly vulnerable to riverine flooding. In July 2022, catastrophic flooding in eastern Kentucky killed over 40 people and caused hundreds of millions in damage, with Hindman, Neon, and other Appalachian communities devastated by flash flooding in steep mountain valleys. This disaster highlighted the extreme vulnerability of rural mountain communities with limited warning infrastructure. The Licking, Green, and Kentucky rivers regularly flood their valleys. Louisville has experienced repeated Ohio River flooding including major events in 1937, 1997, and 2018. The city's flood protection system along the Ohio River is one of the most extensive in the interior United States. Kentucky has over 600 NFIP-participating communities and has received over $3 billion in FEMA flood-related disaster declarations since 2000.",
    commonZones:
      "Zone A and Zone AE along the Ohio, Licking, Green, and Kentucky rivers; Zone X (shaded) for moderate-risk areas in Louisville and Lexington; Zone VE for areas along the Ohio River with surge dynamics; Zone AH for shallow valley flooding in eastern Kentucky.",
    proneCounties:
      "Jefferson County, Fayette County, Kenton County, Pike County, Floyd County",
    insuranceCost:
      "NFIP premiums range from $450-$1,100 for standard-risk properties. Ohio Riverfront properties in Louisville and Covington can run $1,500-$3,500 annually. Eastern Kentucky mountain properties have limited flood insurance availability.",
    faqs: [
      {
        question: "How bad was the 2022 eastern Kentucky floods?",
        answer:
          "The July 2022 floods killed over 40 people and were among the deadliest in Kentucky history. Hindman, Neon, and other Appalachian communities were devastated by flash flooding in steep mountain valleys.",
      },
      {
        question: "Does Louisville flood?",
        answer:
          "Louisville has an extensive history of Ohio River flooding. Major floods in 1937, 1997, and 2018 caused significant damage. The city has invested heavily in flood protection but the Ohio River remains a persistent threat.",
      },
      {
        question: "Is flood insurance mandatory in Kentucky?",
        answer:
          "Flood insurance is required for properties in designated Special Flood Hazard Areas with federally backed mortgages. Given Kentucky's extensive flood risk, insurance is strongly recommended even outside high-risk zones.",
      },
    ],
  },
  "louisiana": {
    name: "Louisiana",
    abbr: "LA",
    content:
      "Louisiana is arguably the most flood-prone state in the nation, facing threats from hurricanes, riverine flooding, coastal erosion, subsidence, and sea level rise simultaneously. The state loses approximately one football field of land every 100 minutes to coastal erosion. Hurricane Katrina in 2005 was the costliest natural disaster in U.S. history causing over $125 billion in damage and flooding 80% of New Orleans. The levee failures inundated entire neighborhoods and displaced over 1 million people. Hurricane Laura in 2020 and Hurricane Ida in 2021 continued the pattern of devastating storm surge. The Mississippi River creates extensive floodplains and the 2011 flood tested the Bonnet Carre Spillway and other structures protecting New Orleans. Baton Rouge experienced catastrophic flooding in August 2016 when historic rainfall caused the Amite and Comite rivers to overflow, inundating over 146,000 homes and causing $10 billion in damage, all without a named storm. Louisiana has over 350 NFIP-participating communities and leads the nation in NFIP claims per capita. The state's combination of threats creates universal flood risk across Louisiana.",
    commonZones:
      "Zone AE along the Mississippi, Atchafalaya, Red, and Calcasieu rivers; Zone VE along the entire Gulf coast; Zone X (shaded) for moderate-risk areas in New Orleans and Baton Rouge; Zone AH for ponding areas in urban New Orleans.",
    proneCounties:
      "Orleans Parish, Jefferson Parish, East Baton Rouge Parish, Calcasieu Parish, Terrebonne Parish",
    insuranceCost:
      "Louisiana NFIP premiums average $700-$1,500 for standard-risk properties. Coastal VE zone properties along the Gulf can run $3,000-$10,000+ annually. New Orleans properties face some of the highest flood insurance costs nationally with many seeing 50-100% increases under Risk Rating 2.0.",
    faqs: [
      {
        question: "Why is Louisiana so flood-prone?",
        answer:
          "Louisiana faces a unique combination of hurricane storm surge, Mississippi River flooding, coastal erosion, land subsidence, and sea level rise. Much of New Orleans sits below sea level relying on pump systems and levees for protection.",
      },
      {
        question: "Did New Orleans flood after Katrina?",
        answer:
          "New Orleans flooded catastrophically during Katrina when the federal levee system failed inundating approximately 80% of the city. Over 1,800 people died and damages exceeded $125 billion. The city has since invested over $14 billion in improved flood protection.",
      },
      {
        question: "Do I need flood insurance in Louisiana?",
        answer:
          "Yes, absolutely. Louisiana has the highest per-capita flood insurance claim rate in the nation. Over 40% of NFIP policies are in high-risk zones. Even outside those zones, the state's unique flood threats make insurance essential.",
      },
    ],
  },
  "maine": {
    name: "Maine",
    abbr: "ME",
    content:
      "Maine faces flood risk from coastal storm surge along its extensive rocky coastline, riverine flooding in the Kennebec, Androscoggin, and Penobscot river valleys, and ice jam flooding during spring breakup. The state's 3,478 miles of coastline create extensive exposure to nor'easters and coastal storms. The January 2024 winter storm brought record storm surge to coastal Maine with Portland, Bar Harbor, and Bath experiencing significant flooding. Ice jam flooding is a particularly dangerous and unpredictable threat in Maine, where the Kennebec and Penobscot rivers regularly develop ice jams during spring breakup causing rapid localized flooding. In 2008, an ice jam on the Kennebec River caused flooding in Augusta that destroyed the Capital Area Relief Bridge. Bangor sits at the head of tide on the Penobscot River facing both riverine and tidal flood risk. Portland has experienced increasing coastal flooding from storm surge and sea level rise. Maine's aging mill towns along the Androscoggin River have historic flood exposure. The state has approximately 170 NFIP-participating communities. Sea level rise projections and warming Gulf of Maine waters are expected to increase flood risk significantly over the coming decades.",
    commonZones:
      "Zone AE along the Kennebec, Androscoggin, and Penobscot rivers; Zone VE along the coast from Kittery to Eastport; Zone X (shaded) for moderate-risk areas in Portland, Lewiston, and Bangor; Zone AH for shallow flooding in river valley communities.",
    proneCounties:
      "Cumberland County, Androscoggin County, Kennebec County, Penobscot County, Waldo County",
    insuranceCost:
      "NFIP premiums range from $600-$1,400 for standard-risk properties. Coastal VE zone properties along the coast can run $2,000-$5,000+ annually. Sea level rise projections are driving premium increases along the entire Maine coastline under Risk Rating 2.0.",
    faqs: [
      {
        question: "Does Maine flood given its northern location?",
        answer:
          "Yes. Maine faces ice jam flooding during spring breakup, coastal storm surge along its extensive coastline, and riverine flooding. The state's coastline is longer than California's, creating significant coastal flood exposure.",
      },
      {
        question: "What are ice jams and why are they dangerous?",
        answer:
          "Ice jams form when river ice blocks water flow causing rapid upstream flooding and sudden releases downstream. They are unpredictable and can cause localized flooding much worse than seasonal snowmelt alone.",
      },
      {
        question: "Is Portland, Maine at flood risk?",
        answer:
          "Portland faces increasing coastal flood risk from storm surge and sea level rise. The city's waterfront has experienced multiple flood events and sea level rise projections threaten significant portions of the downtown area.",
      },
    ],
  },
  "maryland": {
    name: "Maryland",
    abbr: "MD",
    content:
      "Maryland faces flood risk from the Chesapeake Bay, Atlantic coastal storm surge, Potomac River flooding, and urban flash flooding in the Washington D.C. and Baltimore metro areas. The Chesapeake Bay creates extensive tidal flooding exposure across the state's eastern shore. Tropical Storm Lee in 2011 caused record flooding along the Potomac River with Cumberland and western Maryland communities experiencing devastating damage. Ellicott City in Howard County has experienced two 1,000-year flood events in two years, 2016 and 2018, causing hundreds of millions in damage to the historic Main Street district. The Patapsco River valley through Baltimore County faces significant flood risk. Flash flooding is a growing concern across the state as development continues in the Baltimore-Washington corridor. Hurricane Agnes in 1972 caused the worst flooding in Maryland history, inundating Baltimore and causing over $2 billion in adjusted damage. The state has over 300 NFIP-participating communities. Sea level rise projections of 1-3 feet by 2060 threaten to significantly expand flood zones along the Chesapeake Bay and Atlantic coast.",
    commonZones:
      "Zone AE along the Potomac, Patuxent, Patapsco, and Susquehanna rivers; Zone VE along the Chesapeake Bay and Atlantic coast; Zone X (shaded) for moderate-risk areas in Baltimore and Washington suburbs; Zone AH for shallow flooding in tidal marsh areas.",
    proneCounties:
      "Howard County, Baltimore County, Montgomery County, Prince George's County, Talbot County",
    insuranceCost:
      "NFIP premiums range from $700-$1,500 for standard-risk properties. Chesapeake Bay coastal properties can run $2,500-$6,000+ annually. Howard County properties near Ellicott City have seen significant premium increases due to repeated flood events.",
    faqs: [
      {
        question: "How can Ellicott City have two 1,000-year floods in two years?",
        answer:
          "Ellicott City's geography with a narrow valley channeling water into Main Street makes it extremely vulnerable to extreme rainfall. Urban development upstream and climate change have intensified the flooding events.",
      },
      {
        question: "Does the Chesapeake Bay cause flooding in Maryland?",
        answer:
          "Yes. The Chesapeake Bay creates tidal flooding across Maryland's eastern shore and coastal communities. Annapolis has experienced regular sunny-day tidal flooding in recent years due to sea level rise.",
      },
      {
        question: "Is flood insurance expensive in Maryland?",
        answer:
          "Inland properties may pay $700-$1,200 annually, while Chesapeake Bay and Atlantic coast properties can pay $2,500-$6,000+. Risk Rating 2.0 has increased premiums for many coastal and riverine properties throughout the state.",
      },
    ],
  },
  "massachusetts": {
    name: "Massachusetts",
    abbr: "MA",
    content:
      "Massachusetts faces significant flood risk from coastal storm surge, riverine flooding in the Connecticut, Merrimack, and Charles river basins, and urban flash flooding in the Boston metro. Boston sits on filled tidal flats and has experienced recurring coastal flooding. The January 2018 nor'easter caused severe tidal flooding along the waterfront and the March 2010 Patriots' Day flood caused hundreds of millions in damage. The Connecticut River valley through western Massachusetts including Springfield, Northampton, and Greenfield faces regular riverine flooding, with the 1936 and 1955 floods among the most devastating in New England history. The Merrimack River floods through Lowell, Lawrence, and Haverhill. Worcester faces flash flood risk from the Blackstone and Quaboag rivers. The state has over 350 NFIP-participating communities. Sea level rise projections of 2-4 feet by 2060 threaten significant portions of the Boston waterfront, Logan Airport, and coastal communities. Boston has developed a Climate Ready Boston initiative addressing flood resilience including plans for harbor barriers and green infrastructure.",
    commonZones:
      "Zone AE along the Connecticut, Merrimack, Charles, and Blackstone rivers; Zone VE along the Atlantic coast and Boston Harbor; Zone X (shaded) for moderate-risk areas in Boston, Worcester, and Springfield; Zone AR for levee-protected areas along the Connecticut River.",
    proneCounties:
      "Suffolk County, Essex County, Hampden County, Middlesex County, Worcester County",
    insuranceCost:
      "NFIP premiums range from $800-$1,800 for standard-risk properties. Boston Harbor and North Shore coastal properties can run $3,000-$7,000+ annually. Risk Rating 2.0 has significantly increased premiums for many coastal properties.",
    faqs: [
      {
        question: "Does Boston really flood?",
        answer:
          "Yes. Boston was built on filled tidal flats and faces increasing coastal flood risk. The city has developed Climate Ready Boston to address long-term resilience. Sea level rise projections threaten Logan Airport, the waterfront, and low-lying neighborhoods.",
      },
      {
        question: "Do western Massachusetts cities flood?",
        answer:
          "Yes. Springfield and the Connecticut River valley have experienced devastating floods including the catastrophic 1936 and 1955 events. The Connecticut River regularly reaches flood stage.",
      },
      {
        question: "How much does flood insurance cost in Massachusetts?",
        answer:
          "Inland standard-risk properties typically pay $800-$1,200 annually. Coastal properties in Boston, the North Shore, and Cape Cod can pay $3,000-$7,000+. High property values and coastal exposure drive some of the highest premiums in New England.",
      },
    ],
  },
  "michigan": {
    name: "Michigan",
    abbr: "MI",
    content:
      "Michigan faces flood risk from the Great Lakes, riverine flooding along the Kalamazoo, Grand, Saginaw, and Muskegon rivers, and urban flash flooding in the Detroit metro. The May 2020 flooding in Metro Detroit caused hundreds of millions in damage with over 20,000 homes affected in Wayne, Macomb, and Oakland counties. Detroit's aging stormwater infrastructure struggles with increasingly intense rainfall. The August 2014 flood dumped over 4 inches in hours, overwhelming the Woodward Avenue pump station and flooding hundreds of basements and freeways. The Kalamazoo River experienced a devastating 2010 oil spill highlighting flood vulnerability along the corridor. The Saginaw River basin in the Thumb region faces extensive flood risk during spring snowmelt. Great Lakes flooding is an increasing concern as water levels fluctuate, with 2019-2020 high water periods causing severe erosion along Lake Michigan and Lake Huron. The state has over 500 NFIP-participating communities and faces unique challenges as both a coastal and inland flood risk environment. Michigan's aging infrastructure built decades ago for lower rainfall intensities is increasingly overwhelmed by modern storm events.",
    commonZones:
      "Zone A and Zone AE along the Kalamazoo, Grand, Saginaw, and Rouge rivers; Zone X (shaded) for moderate-risk areas throughout Metro Detroit; Zone VE along Lake Michigan and Lake Huron shorelines; Zone AH for ponding areas in urban lowlands.",
    proneCounties:
      "Wayne County, Oakland County, Macomb County, Kalamazoo County, Saginaw County",
    insuranceCost:
      "NFIP premiums range from $450-$1,000 for standard-risk properties. Lake Michigan coastal properties can run $1,500-$4,000+ annually. Metro Detroit flood zone properties have seen increases under Risk Rating 2.0 due to repeated urban flooding events.",
    faqs: [
      {
        question: "Does Michigan flood given the Great Lakes?",
        answer:
          "Yes. Michigan faces both Great Lakes coastal flooding and riverine and urban flooding. Great Lakes water level fluctuations cause erosion and property damage while aging stormwater systems regularly overflow during heavy rain.",
      },
      {
        question: "How bad is flooding in Detroit?",
        answer:
          "Detroit has experienced severe urban flooding events particularly in 2014 and 2020. The city's aging combined sewer system is overwhelmed by intense rainfall, flooding basements, streets, and freeways. Over 20,000 homes were affected in May 2020.",
      },
      {
        question: "Do I need flood insurance in Michigan?",
        answer:
          "If you are in a designated flood zone, yes. Metro Detroit residents should strongly consider coverage even outside high-risk zones as aging infrastructure and changing rainfall patterns have increased flash flood risk.",
      },
    ],
  },
  "minnesota": {
    name: "Minnesota",
    abbr: "MN",
    content:
      "Minnesota faces flood risk from the Mississippi, Minnesota, Red, and Blue Earth rivers, as well as overland flooding and spring snowmelt across the state's lake-dotted landscape. The 2010 and 2011 floods along the Minnesota River caused record water levels and significant damage in communities like Le Sueur, Henderson, and St. Peter. Grand Forks along the Red River experienced one of the worst floods in Midwest history in 1997 when the Red River crested at 54.35 feet, over 22 feet above flood stage, inundating much of the city and causing $3.5 billion in damage. The Red River Valley remains one of the most flood-prone regions in the nation due to its flat terrain, northward flow, and spring snowmelt patterns. Moorhead, East Grand Forks, and other Red River communities have invested in extensive flood protection. The Twin Cities face flood risk from the Mississippi River with the 1965 and 2001 floods causing significant damage. The state has over 800 NFIP-participating communities and has been a leader in floodplain mapping through the Minnesota Department of Natural Resources. Minnesota's cold climate creates unique spring flood dynamics as accumulated winter snowpack melts rapidly.",
    commonZones:
      "Zone A and Zone AE along the Mississippi, Minnesota, Red, and Blue Earth rivers; Zone X (shaded) for moderate-risk areas throughout the Twin Cities; Zone AR for levee-protected areas along the Mississippi; Zone AO for shallow overland flooding in the Red River Valley.",
    proneCounties:
      "Ramsey County, Hennepin County, Polk County, Blue Earth County, Le Sueur County",
    insuranceCost:
      "NFIP premiums typically range $400-$900 for standard-risk properties. Red River Valley properties in Grand Forks and Moorhead can run $1,000-$2,500 annually. Twin Cities riverfront properties face moderate risk with premiums from $600-$1,500.",
    faqs: [
      {
        question: "How bad was the 1997 Grand Forks flood?",
        answer:
          "The Red River crested at 54.35 feet, over 22 feet above flood stage. Most of Grand Forks was inundated forcing the evacuation of 50,000 people. Damages exceeded $3.5 billion and the city invested over $400 million in flood protection afterward.",
      },
      {
        question: "Does Minneapolis flood?",
        answer:
          "The Twin Cities face Mississippi River flood risk with major floods in 1965 and 2001. The metro area has extensive floodplains along the Mississippi, Minnesota, and Rum rivers and urban development has increased flash flood risk.",
      },
      {
        question: "When is flood season in Minnesota?",
        answer:
          "Spring snowmelt from March through May is the primary flood season. The rate of melt combined with spring rainfall determines severity. The Red River Valley is particularly vulnerable because the river flows northward into still-frozen terrain.",
      },
    ],
  },
  "mississippi": {
    name: "Mississippi",
    abbr: "MS",
    content:
      "Mississippi faces severe flood risk from the Mississippi River, Pearl River, Tombigbee River, and coastal storm surge along the Gulf Coast. The state has experienced some of the most devastating floods in American history including the Great Mississippi Flood of 1927 which inundated over 700,000 homes. The 2011 Mississippi River flood tested the state's flood protection systems to their limits with thousands of acres intentionally flooded to protect populated areas. Jackson sits along the Pearl River which regularly floods. The 2020 Pearl River flood inundated portions of downtown Jackson and caused hundreds of millions in damage. The Yazoo River basin in the Mississippi Delta faces chronic flooding affecting agricultural operations and small communities. The Gulf Coast counties of Hancock, Harrison, and Jackson face hurricane storm surge. Hurricane Katrina caused over $120 billion in damage to Mississippi's coast in 2005 with storm surge reaching 30 feet. The state has over 300 NFIP-participating communities and has received over $5 billion in FEMA flood-related disaster declarations since 2000.",
    commonZones:
      "Zone AE along the Mississippi, Pearl, and Tombigbee rivers; Zone VE along the Gulf Coast; Zone X (shaded) for moderate-risk areas in Jackson; Zone AR for areas protected by Mississippi River levees; Zone AH for shallow Delta flooding.",
    proneCounties:
      "Hinds County, Harrison County, Hancock County, Bolivar County, Sunflower County",
    insuranceCost:
      "NFIP premiums range from $400-$1,000 for standard-risk properties. Gulf Coast VE zone properties can run $2,500-$6,000+ annually. Jackson properties along the Pearl River face moderate to high premiums. Coastal premiums have increased significantly post-Katrina.",
    faqs: [
      {
        question: "How bad was the 1927 Mississippi flood?",
        answer:
          "The 1927 flood was the most destructive river flood in U.S. history. It inundated over 700,000 homes, displaced 637,000 people, and caused $1 billion in adjusted damage. It fundamentally changed U.S. flood control policy.",
      },
      {
        question: "Does Jackson flood regularly?",
        answer:
          "Yes. Jackson sits along the Pearl River which regularly reaches flood stage. The 2020 flood inundated portions of downtown causing hundreds of millions in damage. The city has aging infrastructure that struggles with stormwater management.",
      },
      {
        question: "How bad is coastal flooding in Mississippi?",
        answer:
          "Mississippi's Gulf Coast faces extreme storm surge risk. Hurricane Katrina produced 30-foot storm surge destroying entire communities. The coast continues to face hurricane and tropical storm flooding threats with sea level rise increasing vulnerability.",
      },
    ],
  },
  "missouri": {
    name: "Missouri",
    abbr: "MO",
    content:
      "Missouri sits at the confluence of the two largest rivers in North America, the Mississippi and Missouri, creating one of the most flood-prone states in the nation. The 1993 flood caused over $15 billion in damage across Missouri with the towns of Valmeyer and Rhineland completely destroyed. The Missouri River flooded extensively in 2011 and again in 2019, with the 2019 event causing over $2 billion in damage. St. Louis, located at the junction of both rivers, has experienced devastating floods throughout its history including major events in 1973, 1993, and 2019. The city's flood protection system includes extensive levees and floodwalls that have been tested repeatedly. Kansas City sits at the confluence of the Kansas and Missouri rivers with similar riverine flood risk. Southeast Missouri's low-lying Bootheel region is one of the most flood-prone agricultural areas in the country. The state has over 1,100 NFIP-participating communities, one of the highest totals nationally. Flash flooding in the Ozark Mountains of southern Missouri is also a significant concern with narrow valleys channeling storm runoff rapidly.",
    commonZones:
      "Zone A and Zone AE along the Mississippi, Missouri, Kansas, and Osage rivers; Zone X (shaded) for moderate-risk areas in St. Louis and Kansas City; Zone AR for levee-protected areas throughout the state; Zone AO for shallow flooding in the Missouri Bootheel.",
    proneCounties:
      "St. Louis County, Jackson County, St. Charles County, Cape Girardeau County, Butler County",
    insuranceCost:
      "NFIP premiums typically range $400-$900 for standard-risk properties. Riverfront properties along the Mississippi and Missouri rivers can run $1,200-$3,000 annually. Levee-protected properties may have lower premiums but face risk if levees overtop.",
    faqs: [
      {
        question: "Why does Missouri flood so much?",
        answer:
          "Missouri sits at the confluence of the Mississippi and Missouri rivers, two of North America's largest river systems. The state is a natural collection point for floodwaters from a drainage basin covering 40% of the continental U.S.",
      },
      {
        question: "Is St. Louis protected from flooding?",
        answer:
          "St. Louis has an extensive flood protection system but it is not invulnerable. The system was tested during the 1993 and 2019 floods with levee overtopping occurring in some areas. Properties behind levees still face flood risk.",
      },
      {
        question: "How much did the 1993 flood cost Missouri?",
        answer:
          "The 1993 flood caused over $15 billion in adjusted damage across Missouri. Entire towns like Valmeyer were destroyed and rebuilt on higher ground. The disaster led to major changes in federal flood policy including increased buyout programs.",
      },
    ],
  },
  "montana": {
    name: "Montana",
    abbr: "MT",
    content:
      "Montana faces flood risk from spring snowmelt, glacial lake outbursts, and riverine flooding along the Missouri, Yellowstone, Clark Fork, and Flathead rivers. The June 2022 catastrophic flooding in south-central Montana destroyed portions of Highway 212 and devastated communities along the Yellowstone River including Red Lodge, Cooke City, and Gardiner. The flood was triggered by rapid snowmelt and rain on the Beartooth Mountains causing over $1 billion in damage. Glacial lake outburst floods are an increasing concern as climate change causes Montana's remaining glaciers to retreat creating unstable lakes behind natural dams. The Yellowstone River, Montana's largest undammed river, regularly floods its broad valley through eastern Montana. The 1978 flood in Billings caused over $50 million in damage along the Yellowstone. Western Montana faces flash flood risk in narrow valleys along the Clark Fork, Bitterroot, and Flathead rivers. Glacier National Park has experienced infrastructure damage from flooding events. The state has approximately 200 NFIP-participating communities with high-risk zones concentrated along major river corridors and in mountain valleys.",
    commonZones:
      "Zone A and Zone AE along the Yellowstone, Missouri, Clark Fork, and Flathead rivers; Zone X (shaded) for moderate-risk areas in Billings, Missoula, and Great Falls; Zone AH for shallow flooding in glacial valley communities; Zone AO for overland flooding along mountain streams.",
    proneCounties:
      "Yellowstone County, Missoula County, Cascade County, Gallatin County, Carbon County",
    insuranceCost:
      "NFIP premiums typically range $400-$800 for standard-risk properties. Riverfront properties along the Yellowstone and Missouri rivers can run $1,000-$2,500 annually. Mountain valley properties with glacial flood risk may face limited insurance availability.",
    faqs: [
      {
        question: "Did Montana really have $1 billion in flood damage in 2022?",
        answer:
          "Yes. The June 2022 Yellowstone flood was catastrophic destroying highways, bridges, and homes across south-central Montana. Communities like Red Lodge, Gardiner, and Cooke City were severely impacted.",
      },
      {
        question: "Can glaciers cause floods in Montana?",
        answer:
          "Yes. Glacial lake outburst floods occur when melting glaciers create unstable lakes behind natural debris dams. When these dams fail they release catastrophic floods. Montana's remaining glaciers are retreating due to climate change increasing risk.",
      },
      {
        question: "When does Montana flood?",
        answer:
          "Spring snowmelt from April through June is Montana's primary flood period. Rapid warming, rain on snow, and glacial melt can accelerate runoff. Summer thunderstorms can also trigger flash flooding in mountain valleys.",
      },
    ],
  },
  "nebraska": {
    name: "Nebraska",
    abbr: "NE",
    content:
      "Nebraska faces flood risk from the Missouri, Platte, Elkhorn, and Republican rivers with periodic devastating floods driven by spring snowmelt and extreme precipitation events. The March 2019 flood was the most destructive in Nebraska history with the Missouri River and its tributaries causing over $6 billion in damage. Offutt Air Force Base south of Omaha experienced extensive flooding and the small town of Bellwood was almost entirely destroyed. The 2019 flood overwhelmed levee systems along the Missouri River and inundated agricultural land across eastern Nebraska. The Platte River valley floods regularly during spring runoff affecting communities from Kearney to Omaha. The Elkhorn River experienced record flooding in 2019 with the town of Schuyler inundated. Western Nebraska's Republican River has a long flood history including a devastating 1935 flood that killed over 100 people. Omaha sits on the Missouri River and has invested in extensive flood protection since the devastating 1952 flood. The state has approximately 350 NFIP-participating communities. Nebraska's agricultural economy means flooding impacts extend beyond property damage to crop losses and livestock displacement.",
    commonZones:
      "Zone A and Zone AE along the Missouri, Platte, Elkhorn, and Republican rivers; Zone X (shaded) for moderate-risk areas in Omaha and Lincoln; Zone AR for levee-protected areas along the Missouri; Zone AO for shallow flooding in agricultural lowlands.",
    proneCounties:
      "Douglas County, Sarpy County, Hall County, Buffalo County, Colfax County",
    insuranceCost:
      "NFIP premiums typically range $400-$900 for standard-risk properties. Missouri Riverfront properties in Omaha and Council Bluffs can run $1,200-$3,000 annually. The 2019 flood significantly increased awareness and demand for flood insurance across the state.",
    faqs: [
      {
        question: "How bad was the 2019 Nebraska flood?",
        answer:
          "The March 2019 flood was the most destructive in Nebraska history causing over $6 billion in damage. The Missouri River overwhelmed levee systems inundating Offutt Air Force Base and destroying communities across the state.",
      },
      {
        question: "Does Omaha flood?",
        answer:
          "Omaha faces significant Missouri River flood risk. The devastating 1952 flood led to major flood protection investments. The city's levee and floodwall system was tested during the 2019 flood with some areas experiencing overtopping.",
      },
      {
        question: "When is flood season in Nebraska?",
        answer:
          "March through June is Nebraska's primary flood period driven by spring snowmelt and rain events. The 2019 flood occurred in March when rapid warming combined with heavy rain on frozen ground created catastrophic runoff.",
      },
    ],
  },
  "nevada": {
    name: "Nevada",
    abbr: "NV",
    content:
      "Nevada faces flood risk primarily from flash flooding in its desert terrain with Las Vegas and Clark County being the most vulnerable. The Las Vegas Valley experiences regular flash flooding during monsoon season when intense rainfall on the arid landscape creates dangerous flows through urban washes. The August 2022 flooding inundated the Strip and surrounding areas stranding tourists and causing extensive damage. The January 2010 flash flood caused $150 million in damage and killed two people. The Truckee River flows through Reno and Sparks creating riverine flood risk in northwestern Nevada. The 1997 Truckee River flood in Reno caused over $1 billion in damage and inundated much of the downtown area. Carson City faces flood risk from the Carson River and its tributaries. The Las Vegas Wash has experienced erosion and flooding threatening the city's wastewater infrastructure. Nevada has fewer NFIP-participating communities than many states due to its arid climate, but flood risk in developed areas is real and growing. Climate change is projected to intensify monsoon rainfall events increasing flash flood risk across southern Nevada.",
    commonZones:
      "Zone A along the Truckee and Carson rivers in western Nevada; Zone X (shaded) for moderate-risk areas in Las Vegas and Reno; Zone AH for shallow flooding in Las Vegas Wash areas; much of rural Nevada lacks FEMA flood mapping.",
    proneCounties:
      "Clark County, Washoe County, Carson City, Storey County, Lyon County",
    insuranceCost:
      "NFIP premiums range from $400-$900 for standard-risk properties. Las Vegas properties in designated wash areas can run $1,000-$2,500 annually. Truckee River properties in Reno face moderate to high premiums. Much of rural Nevada has limited flood insurance availability.",
    faqs: [
      {
        question: "Does Las Vegas flood?",
        answer:
          "Yes. Las Vegas experiences regular flash flooding during monsoon season. The 2022 and 2010 floods both caused significant damage to the Las Vegas Strip and surrounding areas. Urban development increases impervious surfaces and flood risk.",
      },
      {
        question: "Why does it flood in the desert?",
        answer:
          "Nevada's arid soil and sparse vegetation absorb very little water so even brief intense storms create dangerous flash flooding. Urban development channels water into washes and low-lying areas with steep terrain accelerating runoff.",
      },
      {
        question: "Is Reno flood-prone?",
        answer:
          "Reno faces Truckee River flood risk. The devastating 1997 flood caused over $1 billion in damage and inundated downtown. The city has invested in flood protection since then but the Truckee River continues to pose a flooding threat.",
      },
    ],
  },
  "new-hampshire": {
    name: "New Hampshire",
    abbr: "NH",
    content:
      "New Hampshire faces flood risk from the Connecticut and Merrimack rivers, urban flash flooding in the southern tier, and coastal flooding along its 18-mile seacoast. The Connecticut River forms the state's western border and regularly floods its valley with the 1927, 1936, and 1987 floods causing significant damage. The Merrimack River floods through Concord and Manchester with the 2005 and 2008 events causing tens of millions in damage. The January 2024 winter storm brought record storm surge to the seacoast damaging Hampton Beach and other coastal communities. Flash flooding is an increasing concern in the southern part of the state where rapid development has increased impervious surfaces. The Souhegan, Piscataquog, and Exeter rivers have all experienced flash flood events. The state's mountainous terrain in the north creates concentrated runoff events. New Hampshire has approximately 120 NFIP-participating communities with high-risk zones concentrated along the Connecticut and Merrimack river valleys and the seacoast. Sea level rise is expected to increase coastal flood frequency along the short but vulnerable Atlantic coastline.",
    commonZones:
      "Zone AE along the Connecticut and Merrimack rivers; Zone VE along the Atlantic coast at Hampton Beach and Rye; Zone X (shaded) for moderate-risk areas in Concord and Manchester; Zone AH for shallow flooding in river valley communities.",
    proneCounties:
      "Hillsborough County, Rockingham County, Merrimack County, Strafford County, Cheshire County",
    insuranceCost:
      "NFIP premiums range from $600-$1,400 for standard-risk properties. Coastal VE zone properties along Hampton Beach can run $2,000-$4,500+ annually. Riverfront properties along the Connecticut and Merrimack rivers face moderate premiums of $800-$2,000.",
    faqs: [
      {
        question: "Does New Hampshire flood?",
        answer:
          "Yes. New Hampshire faces flood risk from the Connecticut and Merrimack rivers, coastal storm surge along the seacoast, and urban flash flooding in the southern part of the state. The state has experienced significant floods throughout its history.",
      },
      {
        question: "How bad is coastal flooding in New Hampshire?",
        answer:
          "New Hampshire's 18-mile seacoast is vulnerable to storm surge and tidal flooding. The January 2024 winter storm caused record coastal flooding damaging Hampton Beach and other communities. Sea level rise will increase future risk.",
      },
      {
        question: "Do I need flood insurance in New Hampshire?",
        answer:
          "If you are in a designated flood zone with a federally backed mortgage, yes. Even outside high-risk zones, river flooding and flash flooding pose real risks throughout the state. About 25% of claims come from outside high-risk areas.",
      },
    ],
  },
  "new-jersey": {
    name: "New Jersey",
    abbr: "NJ",
    content:
      "New Jersey faces extensive flood risk from Atlantic coastal storm surge, tidal flooding in bays and rivers, and riverine flooding along the Delaware, Raritan, Passaic, and Hackensack rivers. Hurricane Sandy in 2012 was the state's worst natural disaster causing over $30 billion in damage and flooding thousands of properties along the coast and in inland communities. The Meadowlands region in Bergen and Hudson counties is one of the most flood-prone urban areas in the nation. The Passaic River regularly floods through Paterson, Little Falls, and other communities, with the 2011 Tropical Storm Lee flood causing extensive damage. The Delaware River creates significant flood risk for communities in western New Jersey including Trenton, Easton, and Phillipsburg. The Raritan River floods through Somerset and Middlesex counties affecting densely populated suburban areas. New Jersey has over 500 NFIP-participating communities and leads the nation in flood insurance policies per capita. The state's position between the Atlantic Ocean and the Delaware River creates compound flood risk. Sea level rise projections of 1-3 feet by 2060 will significantly expand coastal flood zones and increase tidal flooding frequency throughout the state.",
    commonZones:
      "Zone AE along the Passaic, Raritan, Hackensack, and Delaware rivers; Zone VE along the entire Atlantic coast from Sandy Hook to Cape May; Zone X (shaded) for moderate-risk areas throughout the Meadowlands and suburban corridors; Zone AH for shallow flooding in tidal marsh areas.",
    proneCounties:
      "Bergen County, Ocean County, Middlesex County, Essex County, Hudson County",
    insuranceCost:
      "NFIP premiums range from $800-$2,000 for standard-risk properties. Atlantic coast VE zone properties can run $3,000-$8,000+ annually. Risk Rating 2.0 has caused significant premium increases throughout the state particularly in coastal areas and the Meadowlands.",
    faqs: [
      {
        question: "How bad was Hurricane Sandy flooding in New Jersey?",
        answer:
          "Sandy caused over $30 billion in damage to New Jersey, making it the state's worst natural disaster. Storm surge inundated entire communities along the coast, through the Meadowlands, and up tidal rivers. Tens of thousands of homes were damaged or destroyed.",
      },
      {
        question: "Does inland New Jersey flood?",
        answer:
          "Yes. The Passaic, Raritan, and Delaware rivers all have significant flood histories. The Passaic River regularly floods Paterson and surrounding communities. The Raritan River floods through densely populated Somerset and Middlesex counties.",
      },
      {
        question: "Is flood insurance required in New Jersey?",
        answer:
          "Flood insurance is required for properties in designated Special Flood Hazard Areas with federally backed mortgages. Given New Jersey's extensive flood risk, insurance is strongly recommended even outside high-risk zones.",
      },
    ],
  },
  "new-mexico": {
    name: "New Mexico",
    abbr: "NM",
    content:
      "New Mexico faces flood risk from flash flooding in its desert and mountain terrain, as well as riverine flooding along the Rio Grande and its tributaries. The state's monsoon season from July through September produces intense rainfall that can trigger dangerous flash floods through arroyos and canyons. In 2013, flash floods in the Tres Ritos area killed three people and destroyed homes. The Rio Grande runs the length of the state through Albuquerque and Las Cruces, creating flood risk in the central and southern valleys. Albuquerque has invested heavily in flood control along the Rio Grande including levees and detention basins. Northern New Mexico's mountain communities face flash flood risk from narrow canyons and burn scar areas. The Hermits Peak/Calf Canyon Fire in 2022 created extensive burn scar areas that dramatically increased downstream flood risk. Las Cruces and Doña Ana County experience flooding along the Rio Grande and from urban stormwater runoff. The state has approximately 120 NFIP-participating communities, with high-risk zones concentrated along the Rio Grande corridor and in monsoon-prone areas of the southern desert. New Mexico's unique combination of desert flash flooding and mountain snowmelt creates year-round flood risk.",
    commonZones:
      "Zone A along the Rio Grande and its tributaries; Zone X (shaded) for moderate-risk areas in Albuquerque and Las Cruces; Zone AH for shallow flooding in arroyo and wash areas; much of rural New Mexico lacks FEMA flood mapping.",
    proneCounties:
      "Bernalillo County, Doña Ana County, Santa Fe County, San Juan County, Valencia County",
    insuranceCost:
      "NFIP premiums typically range $400-$900 for standard-risk properties. Rio Grande corridor properties in Albuquerque and Las Cruces can run $1,000-$2,500 annually. Post-fire flood risk areas have seen premium increases and limited insurance availability.",
    faqs: [
      {
        question: "Does New Mexico flood despite being a desert?",
        answer:
          "Yes. Flash flooding is New Mexico's most common and dangerous flood hazard. Arid soil absorbs little water, so monsoon storms create rapid dangerous flows through arroyos and canyons. Mountain communities also face flash flood risk.",
      },
      {
        question: "How do wildfires affect flooding in New Mexico?",
        answer:
          "Wildfires create burn scars that repel water and increase runoff dramatically. The 2022 Hermits Peak/Calf Canyon Fire created extensive burn scar areas that increased downstream flood risk for years. Even moderate rain on burned terrain can trigger debris flows.",
      },
      {
        question: "Is Albuquerque at flood risk?",
        answer:
          "Yes. Albuquerque sits along the Rio Grande and has experienced multiple flood events. The city has invested heavily in flood control including levees and detention basins, but the river continues to pose a flooding threat especially during snowmelt and monsoon events.",
      },
    ],
  },
  "new-york": {
    name: "New York",
    abbr: "NY",
    content:
      "New York faces significant flood risk from Atlantic coastal storm surge, Hudson River tidal flooding, riverine flooding in the Mohawk, Susquehanna, and Genesee river valleys, and urban flash flooding in New York City. Hurricane Sandy in 2012 caused over $19 billion in damage to New York City alone with storm surge inundating Lower Manhattan, Staten Island, and coastal Brooklyn and Queens. The Mohawk River valley through Utica and Schenectady faces regular flooding. The Southern Tier along the Susquehanna River has experienced repeated major floods, with the 2006 and 2011 events causing hundreds of millions in damage. Binghamton and Johnson City were severely impacted by the 2011 Tropical Storm Lee flooding. The Genesee River floods through Rochester, and Lake Ontario flooding affects communities along the state's northern border. New York City faces increasing coastal flood risk from sea level rise, with the 2021 Hurricane Ida remnants causing deadly flash flooding in basement apartments. The state has over 800 NFIP-participating communities. Climate projections indicate significant increases in both coastal and riverine flood risk across New York over the coming decades.",
    commonZones:
      "Zone AE along the Hudson, Mohawk, Susquehanna, and Genesee rivers; Zone VE along the Atlantic coast, Lower Manhattan, and Long Island Sound; Zone X (shaded) for moderate-risk areas throughout NYC and upstate cities; Zone AH for shallow flooding in lake-adjacent areas.",
    proneCounties:
      "Kings County, Queens County, New York County, Suffolk County, Broome County",
    insuranceCost:
      "NFIP premiums range from $800-$2,000 for standard-risk properties. NYC coastal VE zone properties can run $4,000-$10,000+ annually. Upstate riverfront properties along the Mohawk and Susquehanna rivers face premiums of $1,000-$3,000. Risk Rating 2.0 has caused significant increases throughout the state.",
    faqs: [
      {
        question: "Does New York City really flood?",
        answer:
          "Yes. Hurricane Sandy caused over $19 billion in damage to NYC with storm surge inundating Lower Manhattan. The 2021 Hurricane Ida remnants caused deadly flash flooding in basement apartments. Sea level rise will increase future coastal flood risk.",
      },
      {
        question: "How bad is flooding in upstate New York?",
        answer:
          "Upstate New York faces significant riverine flood risk. The Mohawk River, Susquehanna River, and Genesee River all have long flood histories. Binghamton was severely impacted by 2011 flooding and the Southern Tier faces repeated inundation.",
      },
      {
        question: "Do I need flood insurance in New York?",
        answer:
          "If you are in a designated flood zone with a federally backed mortgage, yes. Given New York's extensive coastal and riverine flood risk, insurance is strongly recommended even outside high-risk zones. About 25% of claims come from outside those zones.",
      },
    ],
  },
  "north-carolina": {
    name: "North Carolina",
    abbr: "NC",
    content:
      "North Carolina faces extensive flood risk from Atlantic coastal storm surge, riverine flooding along the Cape Fear, Neuse, Tar, Yadkin, and French Broad rivers, and increasing inland flooding from tropical systems. Hurricane Florence in 2018 was the state's most costly natural disaster causing over $17 billion in damage with catastrophic inland flooding in the Fayetteville, Wilmington, and Jacksonville areas. The city of Lumberton was devastated by both Hurricane Matthew in 2016 and Hurricane Florence in 2018, with the Lumber River overtopping its banks both times. The Piedmont Triad including Greensboro and High Point faces flash flood risk from urban development. Asheville and the western mountains experienced unprecedented flooding from Hurricane Helene in 2024 when the French Broad and Swannanoa rivers reached historic levels, causing billions in damage. The Outer Banks face chronic coastal flooding from storm surge and tidal flooding. The state has over 600 NFIP-participating communities. North Carolina's combination of coastal exposure, extensive river system, and mountain terrain creates diverse flood risks across the state. Climate change is expected to increase both the intensity of rainfall events and the frequency of coastal flooding.",
    commonZones:
      "Zone AE along the Cape Fear, Neuse, Tar, French Broad, and Lumber rivers; Zone VE along the Atlantic coast and Outer Banks; Zone X (shaded) for moderate-risk areas in Raleigh, Charlotte, and Asheville; Zone AH for shallow flooding in coastal plain lowlands.",
    proneCounties:
      "Cumberland County, Robeson County, New Hanover County, Buncombe County, Wayne County",
    insuranceCost:
      "NFIP premiums range from $600-$1,400 for standard-risk properties. Outer Banks VE zone properties can run $3,000-$7,000+ annually. Riverfront properties along the Cape Fear and Lumber rivers face premiums of $1,200-$3,500. Post-Florence premiums have increased significantly.",
    faqs: [
      {
        question: "How bad was Hurricane Florence flooding in North Carolina?",
        answer:
          "Florence caused over $17 billion in damage making it the state's costliest natural disaster. Catastrophic inland flooding affected Fayetteville, Wilmington, and Jacksonville. Lumberton was devastated for the second time in two years.",
      },
      {
        question: "Does Asheville flood?",
        answer:
          "Yes. Western North Carolina faces flood risk from the French Broad and Swannanoa rivers. Hurricane Helene in 2024 caused unprecedented flooding and billions in damage. Mountain terrain concentrates rainfall into narrow valleys creating dangerous flash floods.",
      },
      {
        question: "Is flood insurance expensive in North Carolina?",
        answer:
          "Inland standard-risk properties may pay $600-$1,200 annually, while Outer Banks and coastal VE zone properties can pay $3,000-$7,000+. Riverfront properties face moderate to high premiums depending on exact location and flood history.",
      },
    ],
  },
  "north-dakota": {
    name: "North Dakota",
    abbr: "ND",
    content:
      "North Dakota faces significant flood risk from the Red River of the North, which flows northward through the state and creates chronic spring flooding due to its flat terrain and ice jam tendencies. Fargo and Moorhead have experienced repeated flooding with the 1997, 2009, 2010, and 2013 events causing hundreds of millions in damage. The 1997 flood was catastrophic, inundating Grand Forks and causing $3.5 billion in damage across the Red River Valley. The city of Grand Forks invested over $400 million in flood protection afterward. Devils Lake, a closed-basin lake in northeastern North Dakota, rose over 30 feet between 1993 and 2011, inundating thousands of acres and requiring the relocation of the town of Churchs Ferry. The James River and Sheyenne River also create flood risk in the eastern part of the state. Western North Dakota faces flash flood risk from the Missouri River and its tributaries in the Badlands region. The state has approximately 200 NFIP-participating communities. North Dakota's flat terrain means that even moderate flooding can spread over extremely wide areas, affecting large numbers of properties and agricultural operations.",
    commonZones:
      "Zone A and Zone AE along the Red River, James River, and Sheyenne River; Zone X (shaded) for moderate-risk areas in Fargo and Grand Forks; Zone AO for shallow overland flooding across the Red River Valley; limited FEMA mapping in western North Dakota.",
    proneCounties:
      "Cass County, Grand Forks County, Traill County, Barnes County, Ramsey County",
    insuranceCost:
      "NFIP premiums typically range $400-$800 for standard-risk properties. Red River Valley properties in Fargo and Grand Forks can run $1,000-$2,500 annually. Properties in high-risk zones along the Red River face some of the highest premiums in the upper Midwest.",
    faqs: [
      {
        question: "Why does the Red River flood so much?",
        answer:
          "The Red River flows northward into colder terrain, promoting ice jams during spring breakup. Its extremely flat valley means floodwaters spread over wide areas. Rapid spring snowmelt combined with saturated ground creates chronic flooding in the Red River Valley.",
      },
      {
        question: "Is Fargo protected from flooding?",
        answer:
          "Fargo has invested heavily in flood protection including levees and the FM Diversion project. However, the Red River continues to pose significant risk and the city has experienced repeated flood events throughout its history.",
      },
      {
        question: "How high has Devils Lake risen?",
        answer:
          "Devils Lake rose over 30 feet between 1993 and 2011, expanding from about 40,000 acres to over 150,000 acres. The rise forced the relocation of Churchs Ferry and damaged infrastructure, agricultural land, and homes around the lake.",
      },
    ],
  },
  "ohio": {
    name: "Ohio",
    abbr: "OH",
    content:
      "Ohio faces flood risk from the Ohio River which creates an extensive floodplain across the southern part of the state, as well as the Miami, Scioto, Great Miami, and Maumee rivers. The 2018 flooding along the Ohio River caused hundreds of millions in damage in communities from Cincinnati to Portsmouth. The Great Miami River valley including Dayton has a long flood history, with the 1913 flood being the state's worst natural disaster, killing over 400 people and leading to the creation of the Miami Conservancy District flood protection system. Dayton's modern flood protection system has prevented major flooding since 1913 but remains one of the most significant flood control systems in the country. Columbus sits at the confluence of the Scioto and Olentangy rivers and faces flood risk during heavy rain events. The 2005 flood in southern Ohio along the Ohio River caused extensive damage in communities like Ironton and Portsmouth. The state has over 1,200 NFIP-participating communities, one of the highest totals nationally. Flash flooding is an increasing concern in urban areas including Cleveland, Cincinnati, and Columbus as aging stormwater infrastructure struggles with more intense rainfall events.",
    commonZones:
      "Zone A and Zone AE along the Ohio, Miami, Scioto, and Maumee rivers; Zone X (shaded) for moderate-risk areas throughout major cities; Zone AR for levee-protected areas along the Ohio River; Zone AO for shallow flooding in agricultural lowlands.",
    proneCounties:
      "Hamilton County, Cuyahoga County, Franklin County, Montgomery County, Scioto County",
    insuranceCost:
      "NFIP premiums typically range $450-$1,000 for standard-risk properties. Ohio Riverfront properties in Cincinnati and Portsmouth can run $1,200-$3,000 annually. Urban flash flood risk areas in Cleveland and Columbus face moderate premiums.",
    faqs: [
      {
        question: "How bad was the 1913 Ohio flood?",
        answer:
          "The 1913 flood was Ohio's worst natural disaster, killing over 400 people and causing massive destruction along the Miami and Scioto rivers. Dayton was inundated under up to 10 feet of water. The disaster led to creation of the Miami Conservancy District.",
      },
      {
        question: "Is Dayton still at flood risk?",
        answer:
          "Dayton's flood protection system, built after 1913, has prevented major flooding for over 100 years. However, the system has design limits and urban development has increased runoff. The city maintains its flood infrastructure to continue protecting against Ohio River flooding.",
      },
      {
        question: "Does Cincinnati flood?",
        answer:
          "Yes. Cincinnati sits on the Ohio River and has experienced repeated flooding. The 2018 flood caused significant damage in the city. The Ohio River regularly reaches flood stage during heavy rain and snowmelt events affecting low-lying neighborhoods.",
      },
    ],
  },
  "oklahoma": {
    name: "Oklahoma",
    abbr: "OK",
    content:
      "Oklahoma faces flood risk from the Arkansas, Canadian, Red, and Verdigris rivers, as well as significant urban flash flooding in the Oklahoma City and Tulsa metro areas. Flash flooding is the state's most common and deadly flood hazard, with narrow valleys and clay soils creating rapid runoff during intense rainfall. The 2013 Memorial Day flood in the Oklahoma City metro killed several people and caused hundreds of millions in damage. Tulsa has invested heavily in flood control since the devastating 1970s and 1980s floods along the Arkansas River and Bird Creek. The Arkansas River valley through eastern Oklahoma floods regularly, affecting communities from Muskogee to Fort Smith. The Red River creates flood risk along the state's southern border. Western Oklahoma faces flash flood risk from ephemeral streams and washes that can become dangerous during intense thunderstorms. The state has over 400 NFIP-participating communities. Oklahoma's location in tornado alley compounds flood risk as severe thunderstorms can produce both tornadoes and flash flooding simultaneously. Climate projections suggest that extreme rainfall events will become more intense increasing flash flood risk across the state.",
    commonZones:
      "Zone A and Zone AE along the Arkansas, Canadian, Red, and Verdigris rivers; Zone X (shaded) for moderate-risk areas in Oklahoma City and Tulsa; Zone AH for shallow flooding in urban creek corridors; Zone AO for overland flash flooding in rural areas.",
    proneCounties:
      "Oklahoma County, Tulsa County, Comanche County, Muskogee County, Le Flore County",
    insuranceCost:
      "NFIP premiums typically range $400-$900 for standard-risk properties. Riverfront properties along the Arkansas and Red rivers can run $1,000-$2,500 annually. Urban flash flood risk areas in Oklahoma City and Tulsa face moderate premiums.",
    faqs: [
      {
        question: "Does Oklahoma flood?",
        answer:
          "Yes. Flash flooding is Oklahoma's most common natural hazard. The state's clay soils and flat terrain in some areas create dangerous runoff conditions during intense thunderstorms. The Arkansas and Red rivers also produce significant riverine flooding.",
      },
      {
        question: "Is Tulsa at flood risk?",
        answer:
          "Tulsa has experienced significant flooding along the Arkansas River and Bird Creek. The city invested heavily in flood control after devastating floods in the 1970s and 1980s and now has an extensive flood management system.",
      },
      {
        question: "When is flood season in Oklahoma?",
        answer:
          "Oklahoma's primary flood season runs from April through June when severe thunderstorms produce intense rainfall. Fall storms can also produce flash flooding. The state's position in tornado alley means severe weather and flooding often occur simultaneously.",
      },
    ],
  },
  "oregon": {
    name: "Oregon",
    abbr: "OR",
    content:
      "Oregon faces flood risk from the Willamette, Columbia, Rogue, Umpqua, and Deschutes rivers, as well as coastal flooding along the Pacific coastline. The Willamette Valley through Portland, Salem, Eugene, and Corvallis is the state's primary flood-prone corridor, with the Willamette River regularly reaching flood stage during winter rain and snowmelt events. The Columbus Day Storm of 1962 and the 1996 floods caused significant damage throughout the valley. Portland sits at the confluence of the Willamette and Columbia rivers and faces flood risk from both waterways. The Columbia River creates extensive flood risk for communities along its length including The Dalles, Hood River, and Astoria. Coastal communities from Astoria to Brookings face storm surge and tidal flooding, with the 2022 king tides causing significant coastal inundation. The Rogue River valley in southern Oregon including Medford and Grants Pass experiences regular flooding. The state has over 200 NFIP-participating communities. Oregon's wet winter climate and mountainous terrain create concentrated runoff events that can cause rapid river rises. Climate change is expected to increase winter rainfall intensity and coastal flood frequency across the state.",
    commonZones:
      "Zone A and Zone AE along the Willamette, Columbia, Rogue, and Umpqua rivers; Zone VE along the Pacific coast from Astoria to Brookings; Zone X (shaded) for moderate-risk areas in Portland, Salem, and Eugene; Zone AH for shallow flooding in agricultural valleys.",
    proneCounties:
      "Multnomah County, Marion County, Lane County, Clatsop County, Jackson County",
    insuranceCost:
      "NFIP premiums range from $600-$1,400 for standard-risk properties. Coastal VE zone properties along the Pacific coast can run $2,000-$5,000+ annually. Willamette Valley riverfront properties face premiums of $800-$2,500 depending on exact location.",
    faqs: [
      {
        question: "Does Portland flood?",
        answer:
          "Yes. Portland sits at the confluence of the Willamette and Columbia rivers and faces flood risk from both. The 1996 floods caused significant damage throughout the metro area. Urban development has increased flash flood risk in some neighborhoods.",
      },
      {
        question: "How bad is coastal flooding in Oregon?",
        answer:
          "Oregon's Pacific coast faces storm surge and king tide flooding. The 2022 king tides caused significant coastal inundation in communities from Astoria to Brookings. Sea level rise projections will increase future coastal flood risk.",
      },
      {
        question: "Do I need flood insurance in Oregon?",
        answer:
          "If you are in a designated flood zone with a federally backed mortgage, yes. The Willamette Valley faces regular river flooding and coastal communities face storm surge risk. About 25% of flood claims come from outside high-risk zones.",
      },
    ],
  },
  "pennsylvania": {
    name: "Pennsylvania",
    abbr: "PA",
    content:
      "Pennsylvania faces extensive flood risk from the Delaware, Susquehanna, Lehigh, Allegheny, and Monongahela rivers, as well as urban flash flooding in the Philadelphia and Pittsburgh metro areas. The Susquehanna River valley through Wilkes-Barre, Scranton, and Harrisburg has a devastating flood history, with the Agnes flood of 1972 causing over $3 billion in damage across the state. Wilkes-Barre was inundated by up to 12 feet of water during Agnes and has invested in extensive flood protection since. The Lehigh River through Allentown and Bethlehem regularly floods, with the 2004 and 2006 events causing significant damage. The Schuylkill River floods through Philadelphia, and the Delaware River creates flood risk for communities from Easton to Philadelphia. Pittsburgh sits at the confluence of the Allegheny and Monongahela rivers and experiences regular flooding. Flash flooding is a growing concern throughout the state as development increases impervious surfaces. Tropical Storm Lee in 2011 caused record flooding along the Susquehanna River. The state has over 1,500 NFIP-participating communities, one of the highest totals nationally. Climate projections suggest Pennsylvania's flood risk will increase significantly as precipitation events become more intense.",
    commonZones:
      "Zone A and Zone AE along the Susquehanna, Delaware, Lehigh, Allegheny, and Monongahela rivers; Zone X (shaded) for moderate-risk areas throughout Philadelphia, Pittsburgh, and Harrisburg; Zone AR for levee-protected areas along the Susquehanna; Zone AH for shallow valley flooding.",
    proneCounties:
      "Philadelphia County, Allegheny County, Luzerne County, Northampton County, Dauphin County",
    insuranceCost:
      "NFIP premiums range from $700-$1,500 for standard-risk properties. Susquehanna Riverfront properties in Wilkes-Barre and Harrisburg can run $1,500-$3,500 annually. Philadelphia urban properties face moderate premiums of $800-$2,000. Pittsburgh properties along the three rivers face similar costs.",
    faqs: [
      {
        question: "How bad was the 1972 Agnes flood in Pennsylvania?",
        answer:
          "Tropical Storm Agnes caused over $3 billion in damage across Pennsylvania making it one of the state's worst natural disasters. Wilkes-Barre was inundated by up to 12 feet of water and the Susquehanna River reached record levels throughout the valley.",
      },
      {
        question: "Does Pittsburgh flood?",
        answer:
          "Pittsburgh sits at the confluence of the Allegheny and Monongahela rivers and experiences regular flooding. The city has experienced significant flood events throughout its history and faces ongoing risk from riverine flooding and urban stormwater runoff.",
      },
      {
        question: "Do I need flood insurance in Pennsylvania?",
        answer:
          "If you are in a designated flood zone with a federally backed mortgage, yes. Pennsylvania has over 1,500 NFIP-participating communities reflecting its extensive flood risk. About 25% of claims come from outside high-risk zones.",
      },
    ],
  },
  "rhode-island": {
    name: "Rhode Island",
    abbr: "RI",
    content:
      "Rhode Island faces flood risk from Narragansett Bay storm surge, Atlantic coastal flooding, and riverine flooding along the Providence, Blackstone, and Pawtuxet rivers. Providence sits at the head of Narragansett Bay and is highly vulnerable to coastal flooding from storm surge and tidal events. The Hurricane of 1938, also known as the Great New England Hurricane, devastated Providence with 13 feet of storm surge flooding downtown and killing hundreds. The state has invested over $1 billion in the Fox Point Hurricane Barrier to protect Providence from storm surge. The Blackstone River valley through Woonsocket and Pawtucket faces regular riverine flooding. South Kingstown and Narragansett experience coastal flooding from nor'easters and tropical systems. The state's small geographic size and dense development mean that even moderate flooding affects large populations. Rhode Island has approximately 50 NFIP-participating communities and has been proactive in coastal resilience planning. Sea level rise in Narragansett Bay is accelerating faster than the global average, increasing flood frequency and severity for coastal and tidal communities. The state's exposure to both Atlantic storms and bay flooding creates compound flood risk throughout the coastal zone.",
    commonZones:
      "Zone AE along the Providence, Blackstone, and Pawtuxet rivers; Zone VE along the Atlantic coast and Narragansett Bay from Providence to Westerly; Zone X (shaded) for moderate-risk areas in Providence, Warwick, and Cranston; Zone AH for shallow flooding in low-lying bay areas.",
    proneCounties:
      "Providence County, Kent County, Washington County, Newport County, Bristol County",
    insuranceCost:
      "NFIP premiums range from $800-$1,600 for standard-risk properties. Narragansett Bay coastal properties can run $2,500-$6,000+ annually. Providence properties near the bay face significant flood risk with premiums of $1,500-$4,000. Sea level rise is driving premium increases statewide.",
    faqs: [
      {
        question: "Is Providence at risk from flooding?",
        answer:
          "Yes. Providence sits at the head of Narragansett Bay and is highly vulnerable to coastal storm surge. The Hurricane of 1938 caused catastrophic flooding with 13 feet of surge. The Fox Point Hurricane Barrier now protects the downtown but surrounding areas remain at risk.",
      },
      {
        question: "How small is Rhode Island and does it still flood?",
        answer:
          "Rhode Island is the smallest state but faces significant flood risk. Its dense development, extensive coastline along Narragansett Bay, and exposure to Atlantic storms create flood risk that affects large portions of the population.",
      },
      {
        question: "Is flood insurance expensive in Rhode Island?",
        answer:
          "Inland properties may pay $800-$1,200 annually, while Narragansett Bay coastal properties can pay $2,500-$6,000+. The state's coastal exposure and high property values drive some of the highest flood insurance costs in New England.",
      },
    ],
  },
  "south-carolina": {
    name: "South Carolina",
    abbr: "SC",
    content:
      "South Carolina faces flood risk from Atlantic coastal storm surge, riverine flooding along the Santee, Pee Dee, Cooper, and Saluda rivers, and increasing inland flooding from tropical systems. Hurricane Matthew in 2016 caused over $2 billion in damage across the state with catastrophic flooding in the Pee Dee region and along the South Carolina coast. The city of Georgetown and Williamsburg County were severely impacted. Hurricane Florence in 2018 caused additional flooding in the same areas. The Cooper River and its tributaries flood through the Charleston metro area, which experiences regular tidal flooding that increases with sea level rise. The Saluda and Broad rivers create flood risk in the Midlands including Columbia, where the 2015 flood caused over $1 billion in damage and killed 19 people. The 2015 Columbia flood was triggered by record rainfall and the failure of infrastructure near the capital. The state has over 400 NFIP-participating communities. South Carolina's combination of coastal exposure, extensive river system, and increasing extreme rainfall events creates significant and growing flood risk across the state.",
    commonZones:
      "Zone AE along the Santee, Pee Dee, Cooper, Saluda, and Broad rivers; Zone VE along the Atlantic coast from Hilton Head to Myrtle Beach; Zone X (shaded) for moderate-risk areas in Charleston, Columbia, and Greenville; Zone AH for shallow flooding in coastal plain lowlands.",
    proneCounties:
      "Charleston County, Horry County, Georgetown County, Richland County, Florence County",
    insuranceCost:
      "NFIP premiums range from $600-$1,400 for standard-risk properties. Coastal VE zone properties along Hilton Head and Myrtle Beach can run $2,500-$6,000+ annually. Columbia riverfront properties face premiums of $1,200-$3,000 after the 2015 flood events.",
    faqs: [
      {
        question: "How bad was the 2015 Columbia flood?",
        answer:
          "The October 2015 flood caused over $1 billion in damage in Columbia and the Midlands. Record rainfall overwhelmed infrastructure and 19 people died. The disaster highlighted the vulnerability of inland communities to extreme rainfall events.",
      },
      {
        question: "Does Charleston flood regularly?",
        answer:
          "Yes. Charleston faces regular tidal flooding, storm surge, and riverine flooding. The city has invested in drainage improvements but continues to experience flooding during storms and even during sunny high tides due to sea level rise.",
      },
      {
        question: "Is flood insurance mandatory in South Carolina?",
        answer:
          "Flood insurance is required for properties in designated Special Flood Hazard Areas with federally backed mortgages. Given the state's extensive coastal and riverine flood risk, insurance is strongly recommended even outside high-risk zones.",
      },
    ],
  },
  "south-dakota": {
    name: "South Dakota",
    abbr: "SD",
    content:
      "South Dakota faces flood risk from the Missouri River, which runs through the center of the state, as well as flash flooding in the Black Hills and along smaller rivers and creeks. The 2011 Missouri River flood was one of the most significant in state history, with releases from upstream dams inundating communities along the river including Pierre, Fort Pierre, and parts of Yankton. The Big Sioux River floods regularly through Sioux Falls, with the 1986 and 2019 events causing significant damage. The Black Hills region faces flash flood risk from steep terrain and narrow canyons, with the 1972 Rapid City flood being the state's deadliest disaster when a wall of water killed 238 people and destroyed much of the city. Rapid City has since invested heavily in flood control along Rapid Creek including channels, detention basins, and open space preservation. The Cheyenne River and White River in western South Dakota also create flood risk during spring snowmelt. The state has approximately 175 NFIP-participating communities with high-risk zones concentrated along the Missouri River corridor and in the Black Hills region. South Dakota's agricultural economy means that flooding impacts extend beyond property damage to crops, livestock, and rural infrastructure.",
    commonZones:
      "Zone A and Zone AE along the Missouri, Big Sioux, and James rivers; Zone X (shaded) for moderate-risk areas in Sioux Falls and Rapid City; Zone AO for shallow flooding in agricultural lowlands; Zone AH for shallow flooding along Rapid Creek in the Black Hills.",
    proneCounties:
      "Minnehaha County, Pennington County, Hughes County, Lincoln County, Yankton County",
    insuranceCost:
      "NFIP premiums typically range $400-$800 for standard-risk properties. Missouri River properties in Pierre and Yankton can run $1,000-$2,500 annually. Rapid Creek properties in Rapid City face moderate premiums due to the 1972 flood history.",
    faqs: [
      {
        question: "How bad was the 1972 Rapid City flood?",
        answer:
          "The June 1972 flood was South Dakota's deadliest disaster, killing 238 people and destroying much of Rapid City. A wall of water from Rapid Creek inundated the city's downtown and surrounding neighborhoods. The disaster led to extensive flood control investments.",
      },
      {
        question: "Does the Missouri River flood in South Dakota?",
        answer:
          "Yes. The 2011 Missouri River flood inundated communities along the river including Pierre and Fort Pierre. Releases from upstream dams overwhelmed the river channel causing significant damage to property and infrastructure throughout the central part of the state.",
      },
      {
        question: "Is flood insurance available in South Dakota?",
        answer:
          "Yes. South Dakota has approximately 175 NFIP-participating communities. Properties in the Missouri River corridor and Black Hills region face significant flood risk and flood insurance is recommended for those in high-risk zones.",
      },
    ],
  },
  "tennessee": {
    name: "Tennessee",
    abbr: "TN",
    content:
      "Tennessee faces extensive flood risk from the Cumberland, Tennessee, French Broad, and Mississippi rivers, as well as devastating urban flash flooding in Nashville and other metropolitan areas. The May 2010 Nashville flood was one of the most catastrophic urban flood events in U.S. history, dropping over 13 inches of rain in 48 hours and causing $2 billion in damage. The Cumberland River flooded downtown Nashville inundating the Opryland Resort and forcing thousands from their homes. The flood killed 11 people and devastated communities throughout the Nashville metro. Memphis faces significant risk from the Mississippi River which flooded extensively in 2011 forcing the opening of the Morganza Floodway and intentionally flooding communities to protect populated areas. Knoxville and the French Broad River valley experience regular riverine flooding. The 2021 Waverly, Tennessee flood killed 20 people when over 17 inches of rain fell in a few hours triggering catastrophic flash flooding in Humphreys County. The state has over 800 NFIP-participating communities. Tennessee's combination of urban development, mountain terrain, and major river systems creates diverse and significant flood risks across the state.",
    commonZones:
      "Zone A and Zone AE along the Cumberland, Tennessee, Mississippi, and French Broad rivers; Zone X (shaded) for moderate-risk areas in Nashville, Memphis, and Knoxville; Zone AH for shallow flooding in urban creek corridors; Zone AO for overland flash flooding in rural areas.",
    proneCounties:
      "Davidson County, Shelby County, Knox County, Wilson County, Humphreys County",
    insuranceCost:
      "NFIP premiums range from $500-$1,200 for standard-risk properties. Cumberland Riverfront properties in Nashville can run $1,500-$3,500 annually. Memphis Mississippi Riverfront properties face similar premiums. Post-2010 flood premium increases have been significant throughout Middle Tennessee.",
    faqs: [
      {
        question: "How bad was the 2010 Nashville flood?",
        answer:
          "The May 2010 flood was catastrophic, dropping over 13 inches of rain in 48 hours. The Cumberland River flooded downtown Nashville inundating the Opryland Resort. 11 people died and damage exceeded $2 billion. It was one of the worst urban floods in U.S. history.",
      },
      {
        question: "Does Memphis flood?",
        answer:
          "Yes. Memphis faces significant Mississippi River flood risk. The 2011 flood caused extensive damage and the city was protected only by intentional flooding of less populated areas upstream. The Mississippi River regularly reaches flood stage at Memphis.",
      },
      {
        question: "Is flash flooding common in Tennessee?",
        answer:
          "Yes. The 2021 Waverly flood killed 20 people when over 17 inches of rain triggered catastrophic flash flooding. Tennessee's mountain terrain and urban development create dangerous flash flood conditions, particularly in the western Highland Rim and Middle Tennessee.",
      },
    ],
  },
  "texas": {
    name: "Texas",
    abbr: "TX",
    content:
      "Texas faces enormous flood risk from Gulf Coast hurricane storm surge, riverine flooding along the Brazos, Colorado, Trinity, Sabine, and Nueces rivers, and devastating urban flash flooding in Houston, Dallas-Fort Worth, and San Antonio. Hurricane Harvey in 2017 was the costliest tropical cyclone in U.S. history, dumping over 60 inches of rain on Houston and causing over $125 billion in damage. Harvey flooded over 300,000 structures and displaced more than 30,000 people. Houston is particularly vulnerable due to its flat terrain, clay soils, and rapid urbanization that has filled in wetlands and prairies that once absorbed rainfall. The city has experienced repeated catastrophic flooding including events in 2015, 2016, and 2017. The Brazos and Colorado rivers create extensive floodplains through central Texas. San Antonio sits along the San Antonio River and faces flash flood risk from the Edwards Plateau watershed. The Texas Hill Country is one of the flash flood-prone areas in the United States. The state has over 1,400 NFIP-participating communities. Texas leads the nation in flood-related fatalities and property damage. Climate change is expected to increase both hurricane intensity and extreme rainfall events across the state.",
    commonZones:
      "Zone AE along the Brazos, Colorado, Trinity, Sabine, and Nueces rivers; Zone VE along the Gulf coast from South Padre Island to Sabine Pass; Zone X (shaded) for moderate-risk areas throughout Houston, Dallas-Fort Worth, and San Antonio; Zone AH for ponding areas in Houston's bayou system.",
    proneCounties:
      "Harris County, Jefferson County, Galveston County, Travis County, Tarrant County",
    insuranceCost:
      "NFIP premiums range from $600-$1,500 for standard-risk properties. Gulf coast VE zone properties can run $3,000-$8,000+ annually. Houston bayou-front properties face premiums of $1,500-$4,000. Risk Rating 2.0 has caused significant increases throughout coastal Texas.",
    faqs: [
      {
        question: "How bad was Hurricane Harvey in Houston?",
        answer:
          "Harvey was the costliest tropical cyclone in U.S. history, dumping over 60 inches of rain on Houston. Over 300,000 structures flooded, 30,000 people were displaced, and damage exceeded $125 billion. The flooding lasted for weeks in some areas.",
      },
      {
        question: "Why does Houston flood so much?",
        answer:
          "Houston's flat terrain, clay soils, and rapid urbanization that has filled in wetlands and prairies create extreme flood vulnerability. The city's bayou system is easily overwhelmed by intense rainfall. Harvey demonstrated the catastrophic potential of stalled tropical systems.",
      },
      {
        question: "Is flood insurance required in Texas?",
        answer:
          "Flood insurance is required for properties in designated Special Flood Hazard Areas with federally backed mortgages. Given Texas's extensive flood risk from hurricanes, rivers, and flash flooding, insurance is strongly recommended statewide. The state leads the nation in flood fatalities.",
      },
    ],
  },
  "utah": {
    name: "Utah",
    abbr: "UT",
    content:
      "Utah faces flood risk from spring snowmelt along the Wasatch Front, flash flooding in southern Utah's canyon country, and urban flooding along the Jordan River and its tributaries. The Wasatch Front corridor including Salt Lake City, Provo, and Ogden experiences regular flooding from snowmelt running off the steep mountains into narrow valleys. The 1983 flooding along the Jordan River in Salt Lake City caused significant damage and led to the river's channelization. In August 2021, a debris flow from a burn scar in Little Cottonwood Canyon killed a woman and destroyed homes, highlighting the danger of post-fire flooding. Southern Utah's slot canyons are extremely dangerous during flash flood events. In 2012, a flash flood in Sand Hollow State Park killed 11 people. Zion National Park regularly closes canyon trails due to flash flood danger. The Virgin River and its tributaries flood through Washington County affecting St. George and surrounding communities. Utah has approximately 100 NFIP-participating communities with limited FEMA mapping in many rural areas. The state's unique combination of mountain snowmelt, desert flash flooding, and post-fire debris flow risk creates year-round flood hazards across diverse terrain.",
    commonZones:
      "Zone A along the Jordan, Provo, and Logan rivers; Zone X (shaded) for moderate-risk areas along the Wasatch Front; Zone AH for shallow flooding in snowmelt-prone areas; much of rural southern Utah lacks FEMA flood mapping.",
    proneCounties:
      "Salt Lake County, Utah County, Davis County, Weber County, Washington County",
    insuranceCost:
      "NFIP premiums typically range $400-$900 for standard-risk properties. Jordan River corridor properties in Salt Lake City can run $1,000-$2,000 annually. Washington County properties along the Virgin River face moderate premiums due to flash flood risk.",
    faqs: [
      {
        question: "Does Utah flood?",
        answer:
          "Yes. Utah faces unique flood risks including spring snowmelt along the Wasatch Front, flash flooding in southern Utah canyon country, and urban flooding along the Jordan River. The state's diverse terrain creates year-round flood hazards.",
      },
      {
        question: "Are slot canyons in Utah dangerous?",
        answer:
          "Extremely. Slot canyons can flood with walls of water with little warning. The 2012 Sand Hollow flood killed 11 people. Zion National Park regularly closes trails due to flash flood danger. Even distant rain can send floodwater through slot canyons.",
      },
      {
        question: "Do I need flood insurance in Utah?",
        answer:
          "If you are in a designated flood zone, yes. Many areas of Utah lack flood mapping, which means risk may be higher than residents realize. Snowmelt flooding and post-fire debris flow risk affect communities throughout the state.",
      },
    ],
  },
  "vermont": {
    name: "Vermont",
    abbr: "VT",
    content:
      "Vermont faces flood risk from riverine flooding along the Winooski, Lamoille, Connecticut, and Otter Creek rivers, as well as flash flooding in the state's steep mountain valleys. Tropical Storm Irene in 2011 was the most devastating flood in modern Vermont history, causing over $800 million in damage and destroying bridges, roads, and homes across the state. The Winooski River valley was particularly hard hit, with Waterbury and Duxbury experiencing catastrophic flooding. The Lamoille River valley through Johnson and Hardwick also suffered severe damage. Vermont's narrow valleys and steep terrain create dangerous flash flood conditions during intense rainfall. The state has approximately 80 NFIP-participating communities. The Connecticut River, which forms Vermont's eastern border, regularly floods its valley affecting communities from Brattleboro to Newport. Climate change is increasing the intensity of rainfall events and the frequency of extreme precipitation in Vermont. The state's extensive stream network and mountain terrain make flash flooding a persistent threat, particularly during summer thunderstorms and fall tropical system remnants. Vermont's commitment to stream management and floodplain restoration has helped reduce flood risk in some communities but the state remains vulnerable to extreme events.",
    commonZones:
      "Zone AE along the Winooski, Lamoille, Connecticut, and Otter Creek rivers; Zone X (shaded) for moderate-risk areas in Burlington, Montpelier, and Brattleboro; Zone AH for shallow flooding in river valley communities; Zone AO for overland flooding in mountain valleys.",
    proneCounties:
      "Washington County, Lamoille County, Chittenden County, Windham County, Addison County",
    insuranceCost:
      "NFIP premiums typically range $600-$1,200 for standard-risk properties. Connecticut River valley properties can run $1,000-$2,500 annually. Winooski River valley properties in Waterbury face elevated premiums due to Irene damage history.",
    faqs: [
      {
        question: "How bad was Tropical Storm Irene in Vermont?",
        answer:
          "Irene was the most devastating flood in modern Vermont history, causing over $800 million in damage. Bridges, roads, and homes were destroyed across the state. Waterbury and Duxbury in the Winooski valley experienced catastrophic flooding.",
      },
      {
        question: "Does Vermont flood?",
        answer:
          "Yes. Vermont's narrow valleys and steep terrain create dangerous flash flood conditions during intense rainfall. The state has experienced significant floods throughout its history with Tropical Storm Irene being the most costly in modern times.",
      },
      {
        question: "Is flood insurance available in Vermont?",
        answer:
          "Yes. Vermont has approximately 80 NFIP-participating communities. Given the state's mountain terrain and river valley flood risk, flood insurance is recommended for properties along rivers and in areas prone to flash flooding.",
      },
    ],
  },
  "virginia": {
    name: "Virginia",
    abbr: "VA",
    content:
      "Virginia faces flood risk from Chesapeake Bay tidal flooding, Atlantic coastal storm surge, riverine flooding along the James, Potomac, Rappahannock, and Shenandoah rivers, and urban flash flooding in the Washington D.C. suburbs. The James River valley through Richmond experiences regular flooding, with the 2004 and 2018 events causing significant damage to the downtown area. The 2018 flooding from Tropical Storm Michael remnants caused over $100 million in damage in the southwestern part of the state. Southwest Virginia's mountain communities face flash flood risk from narrow valleys, as demonstrated by the 2022 flooding in Buchanan County. The Hampton Roads region including Norfolk, Virginia Beach, and Newport News faces chronic tidal flooding that increases with sea level rise. The Potomac River floods through Alexandria and northern Virginia. The Shenandoah Valley experiences regular riverine flooding along the Shenandoah River. The state has over 500 NFIP-participating communities. Virginia's combination of coastal exposure, extensive river system, and mountain terrain creates diverse flood risks. Sea level rise is projected to increase coastal flood frequency by 300-400% by 2050 in the Hampton Roads area.",
    commonZones:
      "Zone AE along the James, Potomac, Rappahannock, and Shenandoah rivers; Zone VE along the Atlantic coast and lower Chesapeake Bay; Zone X (shaded) for moderate-risk areas in Richmond, Norfolk, and Northern Virginia; Zone AH for shallow flooding in tidal lowlands.",
    proneCounties:
      "Norfolk City, Virginia Beach City, Richmond City, Fairfax County, Buchanan County",
    insuranceCost:
      "NFIP premiums range from $700-$1,500 for standard-risk properties. Chesapeake Bay coastal VE zone properties can run $2,500-$6,000+ annually. Richmond James River properties face premiums of $1,200-$3,000. Hampton Roads properties face increasing costs due to tidal flooding.",
    faqs: [
      {
        question: "Does Virginia flood?",
        answer:
          "Yes. Virginia faces diverse flood risks from Chesapeake Bay tidal flooding, Atlantic storm surge, riverine flooding, and mountain flash flooding. The state has experienced significant floods throughout its history affecting both coastal and inland communities.",
      },
      {
        question: "How bad is flooding in Hampton Roads?",
        answer:
          "Hampton Roads faces chronic tidal flooding that increases with sea level rise. Norfolk, Virginia Beach, and Newport News experience regular sunny-day flooding. Sea level rise projections will increase flood frequency by 300-400% by 2050 in the region.",
      },
      {
        question: "Does Richmond flood?",
        answer:
          "Yes. Richmond sits on the James River and has experienced repeated flooding. The 2004 and 2018 floods caused significant damage to the downtown area. The city has invested in flood protection but continues to face risk from the James River.",
      },
    ],
  },
  "washington": {
    name: "Washington",
    abbr: "WA",
    content:
      "Washington faces flood risk from the Skagit, Snohomish, Skykomish, Cowlitz, and Yakima rivers, as well as coastal flooding along the Pacific coast and Puget Sound. The November 2006 flooding along the Skagit River was one of the most significant in state history, inundating parts of Burlington and Mount Vernon and causing hundreds of millions in damage. The Snohomish River valley through Everett and Monroe faces regular riverine flooding. Western Washington's wet winter climate and mountainous terrain create dangerous flood conditions during atmospheric river events. The 2020 and 2021 floods in Whatcom, Skagit, and Snohomish counties caused extensive damage to communities along the Nooksack, Skagit, and Samish rivers. The Cowlitz River floods regularly through Longview and Kelso in southwest Washington. The Yakima River valley in central Washington faces irrigation-driven flooding and spring snowmelt events. Coastal communities from Long Beach to Neah Bay face storm surge and tidal flooding. The state has over 300 NFIP-participating communities. Climate change is expected to increase atmospheric river intensity and winter flood frequency across western Washington.",
    commonZones:
      "Zone A and Zone AE along the Skagit, Snohomish, Cowlitz, and Yakima rivers; Zone VE along the Pacific coast and lower Puget Sound; Zone X (shaded) for moderate-risk areas in Seattle, Tacoma, and Everett; Zone AH for shallow flooding in agricultural valleys.",
    proneCounties:
      "Snohomish County, Skagit County, King County, Cowlitz County, Whatcom County",
    insuranceCost:
      "NFIP premiums range from $600-$1,400 for standard-risk properties. Pacific coast VE zone properties can run $2,000-$5,000+ annually. Skagit and Snohomish river valley properties face premiums of $1,000-$2,500 depending on exact location.",
    faqs: [
      {
        question: "Does western Washington flood?",
        answer:
          "Yes. Western Washington's wet winter climate and mountainous terrain create significant flood risk during atmospheric river events. The Skagit, Snohomish, and Cowlitz rivers regularly flood their valleys affecting communities throughout the region.",
      },
      {
        question: "Is Seattle at flood risk?",
        answer:
          "Seattle faces moderate flood risk from urban flash flooding and the Duwamish River. The city's hilly terrain creates concentrated runoff during heavy rain events. While not as flood-prone as the Skagit valley, Seattle experiences regular flooding impacts.",
      },
      {
        question: "When is flood season in Washington?",
        answer:
          "Winter from November through February is Washington's primary flood period, driven by atmospheric river events that bring intense rainfall to western Washington. Spring snowmelt also contributes to river flooding in mountain valleys.",
      },
    ],
  },
  "west-virginia": {
    name: "West Virginia",
    abbr: "WV",
    content:
      "West Virginia faces severe flash flood risk from its mountainous terrain, narrow valleys, and aging infrastructure. The state's steep topography creates dangerous conditions where rainfall concentrates rapidly in narrow valleys with little warning. The June 2016 flooding was one of the state's worst disasters, killing 23 people in the Greenbrier Valley and surrounding areas. The town of Richwood was devastated, and the Greenbrier River reached record levels. The Kanawha River valley through Charleston faces regular riverine flooding. Huntington and the Ohio River communities in the western part of the state experience flooding from both the Ohio and Guyandotte rivers. The June 2022 flooding in eastern Kentucky and neighboring West Virginia areas killed several people and caused widespread destruction. The state has approximately 175 NFIP-participating communities. West Virginia's combination of steep terrain, narrow valleys, aging infrastructure, and limited resources for flood mitigation creates some of the highest flood risk and vulnerability in the Appalachian region. Coal mining has altered drainage patterns in many areas, potentially increasing flood risk in downstream communities.",
    commonZones:
      "Zone A and Zone AE along the Kanawha, Ohio, Monongahela, and New rivers; Zone X (shaded) for moderate-risk areas in Charleston and Huntington; Zone AH for shallow flooding in narrow valley communities; many rural mountain areas lack FEMA flood mapping.",
    proneCounties:
      "Kanawha County, Cabell County, Greenbrier County, Fayette County, Mingo County",
    insuranceCost:
      "NFIP premiums typically range $400-$900 for standard-risk properties. Ohio and Kanawha river properties in Charleston and Huntington can run $1,000-$2,500 annually. Mountain valley properties have limited insurance availability and may lack adequate flood mapping.",
    faqs: [
      {
        question: "Why is West Virginia so prone to flash flooding?",
        answer:
          "West Virginia's steep terrain and narrow valleys concentrate rainfall rapidly into dangerous flash floods. The state's mountain topography means water funnels into valleys with little time for warning. Aging infrastructure and coal mining drainage patterns compound the risk.",
      },
      {
        question: "How bad was the 2016 West Virginia flood?",
        answer:
          "The June 2016 flood killed 23 people in the Greenbrier Valley and surrounding areas. The Greenbrier River reached record levels and towns like Richwood were devastated. It was one of the deadliest flood events in state history.",
      },
      {
        question: "Is flood insurance common in West Virginia?",
        answer:
          "West Virginia has approximately 175 NFIP-participating communities. However, many mountain communities lack adequate flood mapping, and flood insurance uptake is low. Given the state's high flash flood risk, insurance is strongly recommended.",
      },
    ],
  },
  "wisconsin": {
    name: "Wisconsin",
    abbr: "WI",
    content:
      "Wisconsin faces flood risk from the Mississippi, Wisconsin, Fox, Rock, and Chippewa rivers, as well as urban flash flooding in the Milwaukee and Madison metro areas. The 2008 and 2018 flooding along the Mississippi River caused hundreds of millions in damage to communities in southwestern Wisconsin. La Crosse, Prairie du Chien, and other Mississippi River towns have long flood histories. The Fox River valley through Appleton, Oshkosh, and Green Bay faces regular riverine flooding. Milwaukee has experienced significant urban flash flooding events, including the August 2018 flood that caused over $100 million in damage when over 7 inches of rain fell in a few hours. The Rock River and its tributaries flood through Janesville and Beloit. The Wisconsin Dells area along the Wisconsin River faces both riverine and flash flood risk. The state has over 600 NFIP-participating communities and has invested in flood mitigation through the Wisconsin Department of Natural Resources. Northern Wisconsin communities along the Chippewa and Flambeau rivers also experience regular flooding during spring snowmelt. Climate projections suggest Wisconsin's flood risk will increase with more intense rainfall events and earlier spring snowmelt.",
    commonZones:
      "Zone A and Zone AE along the Mississippi, Wisconsin, Fox, Rock, and Chippewa rivers; Zone X (shaded) for moderate-risk areas in Milwaukee, Madison, and Green Bay; Zone AO for shallow flooding in agricultural lowlands; Zone AR for levee-protected areas along the Mississippi.",
    proneCounties:
      "Milwaukee County, Dane County, La Crosse County, Outagamie County, Rock County",
    insuranceCost:
      "NFIP premiums typically range $400-$900 for standard-risk properties. Mississippi River properties in La Crosse and Prairie du Chien can run $1,200-$3,000 annually. Milwaukee urban flood zone properties face moderate premiums of $600-$1,500.",
    faqs: [
      {
        question: "Does Milwaukee flood?",
        answer:
          "Yes. Milwaukee has experienced significant urban flash flooding, including the devastating August 2018 flood that caused over $100 million in damage when over 7 inches of rain fell in hours. The city's stormwater system is being upgraded to handle more intense rainfall events.",
      },
      {
        question: "How bad is Mississippi River flooding in Wisconsin?",
        answer:
          "The 2008 and 2018 Mississippi River floods caused hundreds of millions in damage to southwestern Wisconsin communities. La Crosse, Prairie du Chien, and other river towns have experienced repeated flooding and have invested in flood protection infrastructure.",
      },
      {
        question: "Do I need flood insurance in Wisconsin?",
        answer:
          "If you are in a designated flood zone with a federally backed mortgage, yes. Wisconsin faces both riverine and urban flash flood risk. About 25% of NFIP claims come from outside high-risk zones across the state.",
      },
    ],
  },
  "wyoming": {
    name: "Wyoming",
    abbr: "WY",
    content:
      "Wyoming faces flood risk from spring snowmelt, flash flooding in canyons and draws, and riverine flooding along the North Platte, Yellowstone, Bighorn, and Snake rivers. The state's mountainous terrain creates concentrated runoff events during spring warming when accumulated snowpack melts rapidly. The 2011 flooding along the North Platte River caused significant damage in Casper and surrounding communities. The Bighorn River floods its broad valley through Sheridan, Lovell, and the Bighorn Basin. Yellowstone River flooding in June 2022 affected communities in Park County including Gardiner, Cooke City, and the north entrance to Yellowstone National Park. The Snake River in western Wyoming faces flood risk from both snowmelt and monsoon rainfall. Flash flooding is a significant hazard in Wyoming's canyons and draws where narrow terrain concentrates water flow. The state has approximately 80 NFIP-participating communities, with limited FEMA mapping in many rural and mountain areas. Wyoming's low population density means that flood impacts often affect small communities with limited resources for mitigation and recovery. Climate change is expected to alter snowmelt timing and intensity, potentially increasing spring flood risk across the state.",
    commonZones:
      "Zone A along the North Platte, Yellowstone, Bighorn, and Snake rivers; Zone X (shaded) for moderate-risk areas in Casper and Cheyenne; Zone AH for shallow flooding in river valley communities; much of rural Wyoming lacks FEMA flood mapping.",
    proneCounties:
      "Natrona County, Park County, Big Horn County, Teton County, Sheridan County",
    insuranceCost:
      "NFIP premiums typically range $400-$800 for standard-risk properties. North Platte River properties in Casper can run $1,000-$2,000 annually. Mountain valley properties may face limited insurance availability due to incomplete flood mapping.",
    faqs: [
      {
        question: "Does Wyoming flood?",
        answer:
          "Yes. Wyoming faces spring snowmelt flooding, flash flooding in canyons, and riverine flooding along major rivers. The 2011 North Platte River flood and 2022 Yellowstone River flood both caused significant damage to communities across the state.",
      },
      {
        question: "How bad was the 2022 Yellowstone flooding?",
        answer:
          "The June 2022 flood was catastrophic for communities near Yellowstone National Park. Gardiner and Cooke City were severely impacted by the Yellowstone River flooding. The north entrance to Yellowstone was destroyed and the park was closed for over a week.",
      },
      {
        question: "Is flood insurance common in Wyoming?",
        answer:
          "Wyoming has approximately 80 NFIP-participating communities. Many rural and mountain areas lack complete flood mapping, which means flood risk may be underestimated. Flood insurance is recommended for properties near rivers and in canyon areas.",
      },
    ],
  },
};
