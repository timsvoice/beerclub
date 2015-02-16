BREWERYDB_KEY = ENV['BREWERYDB_KEY']

class BreweryDB
  include HTTParty
  default_params :key => BREWERYDB_KEY

  base_uri "http://api.brewerydb.com/v2"
  debug_output $stderr

  def self.beers(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/beers", :query => options)
  end
  
  def self.search(options={})
    options.merge!({
      :key => BREWERYDB_KEY,
      :type => 'beer'      
    })

    response = get("/search", :query => options)
  end

  def self.breweries(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/breweries", :query => options)
  end

  def self.brewery(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/brewery/#{id}", :query => options)
  end

  def self.beers(options={})
    options.merge!({
      :key => BREWERYDB_KEY     
    })

    response = get("/beers", :query => options)
  end

  def self.beer(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY,
      :withBreweries => 'Y'      
    })

    response = get("/beer/#{id}", :query => options)
  end

  def self.styles(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/styles", :query => options)
  end

  def self.style(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/style/#{id}", :query => options)
  end

  def self.categories(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/categories", :query => options)
  end

  def self.category(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/category/#{id}", :query => options)
  end

  def self.glassware(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/glassware", :query => options)
  end

  def self.glass(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/glass/#{id}", :query => options)
  end

  def self.events(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/events", :query => options)
  end

  def self.event(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/event/#{id}", :query => options)
  end

  def self.featured(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/featured", :query => options)
  end

  def self.features(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/features", :query => options)
  end


  def self.feature(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/feature/#{id}", :query => options)
  end

  def self.fluidsizes(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/fluidsizes", :query => options)
  end


  def self.fluidsize(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/fluidsize/#{id}", :query => options)
  end

  def self.guilds(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/guilds", :query => options)
  end


  def self.guild(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/guild/#{id}", :query => options)
  end

  def self.ingredients(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/ingredients", :query => options)
  end


  def self.ingredient(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/ingredient/#{id}", :query => options)
  end

  def self.locations(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/locations", :query => options)
  end


  def self.location(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/location/#{id}", :query => options)
  end

  def self.socialsites(options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/socialsites", :query => options)
  end


  def self.socialsite(id, options={})
    options.merge!({
      :key => BREWERYDB_KEY
    })

    response = get("/socialsite/#{id}", :query => options)
  end

  def self.apikey
    @@apikey
  end

  def self.apikey=(apikey)
    @@apikey = apikey
  end

  def self.configure
    yield self
  end
end