# SERU-Testing-Back-end-Developer
*
Vehicle REST API

API dibuat mengikuti kaidah RESTful API yang baik dan benar (GET all, GET by ID, POST, PATCH, DELETE) Implementasi authentication Implementasi pagination (metadata: total, limit, offset, etc) Implementasi filter tiap entity (API) dengan column yang tersedia

Notes:

Buat repo public di Github/Gitlab Bisa menggunakan bahasa pemrograman:

Java .NET Node.JS

Database bisa menggunakan apa saja (PostgresQL, SQL Server, MySQL, etc) Docker file untuk deployment (nilai plus) Bisa dikirim ke email: noval@bangsacerdas.com

Additional notes:

Untuk mengakses API yang sudah dibuat diperlukan token dari hasil login (authentication) Setiap entity diberi field audit (created_at, updated_at) User Admin bisa mengubah dan menghapus data (authorization) User non admin hanya bisa menampilkan data Share Postman collection (push ke source code) Buat sekreatif mungkin sesuai case yang diberikan Pengerjaan 3 hari (deadline pengiriman hari Kamis malam tanggal 1 Feb 2024) Deploy hasil ke server menjadi nilai plus

Sample filter API:

Brand: BMW (1)

API: /vehicle-types?brand_id=1

Response: [{

“name”: “SUV”,

}, {

“name”: “Sedan”,

. . .

}]
upload hasil jawaban anda melalui github/gitlab

ERD (lampiran di bawah):

Gambar Tanpa Teks
