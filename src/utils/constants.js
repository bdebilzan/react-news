export const categoryQueries = {
  general:
    "title:(breaking news OR latest updates OR headlines OR top stories) AND (domainIs:cnn.com OR domainIs:nytimes.com OR domainIs:foxnews.com OR domainIs:nypost.com OR domainIs:thehill.com OR domainIs:newsweek.com)",
  science:
    "title:(science OR space OR astronomy OR research OR physics OR biology) AND (domainIs:nationalgeographic.com OR domainIs:scientificamerican.com OR domainIs:nature.com OR domainIs:livescience.com)",
  technology:
    "title:(technology OR AI OR cybersecurity OR innovation OR gadgets OR software) AND (domainIs:theverge.com OR domainIs:wired.com OR domainIs:techcrunch.com OR domainIs:arstechnica.com OR domainIs:mashable.com)",
  sports:
    "title:(sports OR football OR NBA OR baseball OR mma OR soccer OR golf) AND (domainIs:espn.com OR domainIs:bleacherreport.com OR domainIs:si.com OR domainIs:clutchpoints.com OR domainIs:yardbarker.com)",
  business:
    "title:(business OR startups OR economy OR finance OR stock market OR investment) AND (domainIs:forbes.com OR domainIs:businessinsider.com OR domainIs:cnbc.com OR domainIs:bloomberg.com)",
  entertainment:
    "title:(movies OR music OR TV OR Hollywood OR streaming OR celebrities) AND (domainIs:variety.com OR domainIs:hollywoodreporter.com OR domainIs:rollingstone.com OR domainIs:vulture.com OR domainIs:billboard.com)",
  politics:
    "title:(politics OR election OR government OR legislation OR policy OR congress) AND (domainIs:thehill.com OR OR domainIs:npr.org OR domainIs:cnn.com OR domainIs:foxnews.com)",
  food: "title:(food OR cuisine OR recipes OR restaurants OR cooking OR chefs) AND (domainIs:eater.com OR domainIs:bonappetit.com OR domainIs:foodandwine.com OR domainIs:saveur.com)",
  health:
    "title:(health OR wellness OR fitness OR nutrition OR medicine OR mental health) AND (domainIs:medscape.com OR domainIs:healthline.com OR domainIs:medicalnewstoday.com OR domainIs:everydayhealth.com)",
  travel:
    "title:(travel OR tourism OR flights OR hotels OR adventure OR destinations) AND (domainIs:travelandleisure.com OR domainIs:cntraveler.com OR domainIs:afar.com OR domainIs:tripadvisor.com)",
};
