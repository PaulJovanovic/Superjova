class ContactController < ApplicationController
  def index
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request

    if @contact.deliver
      flash[:notice] = "Message sent."
      redirect_to contact_index_path
    else
      flash[:notice] = "Failed to send message."
      render :index
    end
  end
end
