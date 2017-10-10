class ArticlesController < ApplicationController

before_action :authenticate_user!, except: [ :index ]

    def index
        @articles = Article.all()
        render json: @articles
    end

    def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end



  def article_params
    params.permit(:title, :author, :description, :url, :urlToImage, :publishedAt)
  end

end
