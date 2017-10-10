class Newssearch

  def initialize(sorted_by)
    @sorted_by = sorted_by
  end

  def get_news
    response = HTTParty.get('https://newsapi.org/v1/articles?source=newsweek&sortBy='+@sorted_by+'&apiKey=' +ENV['API_KEY'])
    puts response
  end


end
