class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.string :description
      t.string :url
      t.string :urlToImage
      t.datetime :publishedAt
      t.integer :user

      t.timestamps
    end
  end
end
