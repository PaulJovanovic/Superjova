require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Superjova
  class Application < Rails::Application
    config.time_zone = 'Pacific Time (US & Canada)'
    config.filter_parameters += [:password]
  end
end
