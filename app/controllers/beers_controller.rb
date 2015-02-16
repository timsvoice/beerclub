require 'brewerydb_api'

class BeersController < ApplicationController
  # before_action :set_beer, only: [:show, :update, :destroy]

  # GET /beers
  # GET /beers.json
  def index
    @beers = BreweryDB.beers
    render json: @beers
  end

  # GET /beer/cBLTUw
  # GET /beers/1.json
  def show
    @beer = BreweryDB.beer(params[:id])    
    render json: @beer
  end

end