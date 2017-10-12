class ChangeUserOnArticlesToUserId < ActiveRecord::Migration[5.1]
  def change
    rename_column :articles, :user, :user_id
  end
end
