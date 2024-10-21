-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "image_link" VARCHAR(250),
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "sku" VARCHAR(10) NOT NULL,
    "category_id" INTEGER NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "large_description" VARCHAR(500) NOT NULL,
    "price" DECIMAL NOT NULL,
    "discount_price" DECIMAL,
    "discount_percent" DECIMAL,
    "is_new" BOOLEAN,
    "image_link" VARCHAR(250),
    "other_image_link" JSONB NOT NULL,
    "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
