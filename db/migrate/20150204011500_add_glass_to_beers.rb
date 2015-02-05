class AddGlassToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :glass, :integer
  end
end
