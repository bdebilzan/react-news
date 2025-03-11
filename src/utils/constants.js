export const categoryQueries = {
  general: "title:(breaking news OR latest updates OR global headlines)",
  science:
    "title:(science OR research OR physics OR chemistry OR space OR astronomy)",
  technology:
    "title:(technology OR AI OR artificial intelligence OR gadgets OR software OR cybersecurity OR innovation)",
  sports:
    "title:(sports OR football OR soccer OR NBA OR Olympics OR tennis OR baseball OR cricket OR F1)",
  business:
    "title:(business OR startups OR entrepreneurship OR economy OR finance OR investment) AND NOT (sports OR entertainment)",
  entertainment:
    "title:(entertainment OR movies OR music OR celebrity OR streaming OR TV shows OR Hollywood OR Bollywood)",
  politics:
    "title:(politics OR election OR government OR policy OR legislation OR president OR congress OR parliament)",
  food: "title:(food OR cuisine OR recipes OR restaurants OR dining OR chef OR cooking)",
  health:
    "title:(health OR wellness OR fitness OR medical OR disease OR nutrition OR mental health OR medicine)",
  travel:
    "title:(travel OR tourism OR destinations OR flights OR hotels OR backpacking OR adventure)",
};
