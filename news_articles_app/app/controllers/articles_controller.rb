class ArticlesController < ApplicationController

# before_action :authenticate_user!, except: [ :index , :create , :show]
  before_action :authenticate_user!

    def index
        @articles = Article.where(user_id: params[:user_id])
        render json: @articles
    end

    def show
      @article = Article.find(params[:id])
      render json: @article
    end


 ## def create
  ##  @article = Article.new(article_params)

    #if @article.save
    #  render json: @article
   # else
  #    render json: @article.errors, status: :unprocessable_entity
 #   end
# end

 def create
    puts params[:urlToImage]
    @article = Article.create(

      title: params[:title],
      author: params[:author],
      description: params[:description],
      url: params[:url],
      urlToImage: params[:urlToImage],
      publishedAt: params[:publishedAt],
      user_id: current_user.id
    )
    render json: { article: @article }


 end






  ##def article_params
    ##params.permit(:title, :author, :description, :url, :urlToImage, :publishedAt)
  ##end

end
