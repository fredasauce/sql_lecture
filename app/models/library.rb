class Library < ApplicationRecord
  has_many :customers
  has_many :books

  def self.books_per_library
    # -----Combo of Active Record and SQL------ 
    # can paste select statement in quotes
    # must place methods next to each other
    # put ENTIRE join statement in quotes
    # pure active record, but can also do "book_count DESC"
    Book.select("libraries.name, count(books.id) AS book_count")
      .joins("LEFT JOIN libraries ON libraries.id = books.library_id")
      .group("libraries.name")
      .order(book_count: :desc)

    # --------Pure SQL Way---------
    # find_by_sql(["
    #   SELECT libraries.name, count(books.id) AS book_count
    #   FROM books
    #   LEFT JOIN libraries ON libraries.id = books.library_id
    #   GROUP BY libraries.name
    #   ORDER BY book_count DESC
    # "])
  end
end
