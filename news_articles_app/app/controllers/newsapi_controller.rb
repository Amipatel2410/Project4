class NewsapiController < ApplicationController

def index
  newssearch_object = Newssearch.new("top")
  @article = newssearch_object.get_news()
  render json: @article
end

end
