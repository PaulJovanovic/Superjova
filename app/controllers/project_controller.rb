class ProjectController < ApplicationController
  def index
    render :action => "index.html.erb", :layout => "application"
  end
end
