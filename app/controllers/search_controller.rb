require 'brewerydb_api'

class SearchController < ApplicationController

  def show
    @search = BreweryDB.search('q' => (params[:id]))    
    render json: @search
  end

end
