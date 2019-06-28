10.times do
  library = Library.create(
    name: "#{Faker::Address.unique.state} Library",
    location: Faker::Address.street_name,
    open: [true, false].sample,
  )
  rand(25..50).times do
    Customer.create(
      name: Faker::Name.unique.name,
      email: Faker::Internet.unique.email,
      rewards_member: [true, false].sample,
      library_id: library.id,
    )
  end
  rand(200..500).times do
    Book.create(
      title: Faker::Book.title,
      author: Faker::Book.author,
      genre: Faker::Book.genre,
      available: [true, false].sample,
      library_id: library.id,
    )
  end
end

5000.times do
  customer = Customer.all.sample
  book = Book.where(library_id: customer.library_id).sample
  date = rand(Date.civil(2015, 1, 1)..Date.civil(2020, 12, 31))
  Log.create(
    customer_id: customer.id,
    book_id: book.id,
    created_at: date,
    updated_at: date,
  )
end
