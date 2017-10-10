

  #require "../app/models/newssearch.rb"
  newssearch_object = Newssearch.new("top")
  @article = newssearch_object.get_news()
    newssearch_object = Newssearch.new("latest")
    @article = newssearch_object.get_news()

