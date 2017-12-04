The New York Times Article Saver application featured on this page is built in two different versions: a Mongo Database Scraper and a React Application.  Both sites accomplish the goal of finding articles from the New York Times and give users the ability to save articles to a mongo database.  Zachary Saltzman was responsible for all aspects of these applications.

Technologies Used: MongoDB, Express, Node, Handlebars, Cheerio as well as Javascript, HTML, CSS, Bootstrap, jQuery

Description:

The New York Times Mongo News Scraper gathers articles based on a custom cheerio scraper of the New York Times homepage.  The scraped articles are saved into a mongo database.  The scraped articles can either be saved or commented on.  The comment feature is a separate model that communicates with a comment collection in the mongo database.  The comments are then linked with their appropriate article.
