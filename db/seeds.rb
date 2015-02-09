# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

beers = Beer.create([
  { name: "Hop Knife Harvest Ale",
    brewery: "Tröegs Brewing Company",
    rating: 4,
    location: "ABC Beer Co."
  },
  { name: "Allagash Fluxus '14 (2014)",
    brewery: "Allagash Brewing Company",
    rating: 2.5,
    location: "In a weirwood clearing beyond the wall"
  },
  { name: "Espresso Oak Aged Yeti",
    brewery: "Great Divide Brewing Company",
    rating: 4,
    location: "Apre Ski"
  },
  { name: "Hop Knife Harvest Ale",
    brewery: "Tröegs Brewing Company",
    rating: 4,
    location: "ABC Beer Co."
  },
  { name: "Allagash Fluxus '14 (2014)",
    brewery: "Allagash Brewing Company",
    rating: 2.5,
    location: "In a weirwood clearing beyond the wall"
  },
  { name: "Espresso Oak Aged Yeti",
    brewery: "Great Divide Brewing Company",
    rating: 4,
    location: "Apre Ski"
  }
  ])