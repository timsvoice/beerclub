class ChangeRatingOfBeers < ActiveRecord::Migration
  def change
    change_column :beers, :rating, :decimal
  end
end
