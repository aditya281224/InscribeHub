import React from "react";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Comments from "../components/Comments";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const SinglePostPage = () => {
  
  return (
    <div className="flex flex-col gap-8">
      
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Adi</Link>
            <span>on</span>
            <Link className="text-blue-800">web design</Link>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, unde?</span>
          </div>
          <p className="text-gray-500 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia culpa qui laudantium porro, dolor impedit doloremque! Saepe consectetur maxime perspiciatis!</p>
        </div>
         
          <div className="hidden lg:block w-2/5">
            <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
          </div>
        
      </div>

      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, a iure, laudantium repellat molestiae ratione consectetur voluptatem illum commodi vel quos veritatis placeat officia non minima, tenetur dolorem. Temporibus officia nemo asperiores doloribus impedit nihil iusto suscipit voluptas quo! Pariatur asperiores, ullam voluptates temporibus facilis adipisci error rerum velit consequuntur expedita nulla ea doloremque consectetur harum praesentium eligendi ipsum aspernatur sint quisquam et inventore impedit doloribus molestias! Quis, asperiores! Quod officia neque voluptatum natus modi, delectus voluptatibus, sint eos non exercitationem rerum quidem. Dignissimos dolorem, optio expedita, minima impedit perspiciatis quasi odio aut incidunt, accusamus neque excepturi tempora officia provident consequuntur aliquid voluptates cumque laborum eius cupiditate hic. Maiores voluptatum enim quod omnis officiis aliquam et blanditiis cum dolore laborum fugit rerum reprehenderit voluptates sint iure velit excepturi ut inventore, rem ratione magnam voluptate! Fuga nostrum itaque et iusto perspiciatis consequatur praesentium nam rerum a, deserunt doloremque atque, facilis aliquid nihil autem pariatur aperiam cumque perferendis. Nostrum, possimus. Earum dolore ipsum a error, quas placeat eveniet illo cum eum expedita libero perferendis necessitatibus odio quibusdam ducimus officiis in? Veniam, enim quaerat, aliquid maiores reiciendis explicabo mollitia repellendus fuga perspiciatis minus soluta sit tenetur voluptatem illo libero iste ut, consequatur asperiores!</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, a iure, laudantium repellat molestiae ratione consectetur voluptatem illum commodi vel quos veritatis placeat officia non minima, tenetur dolorem. Temporibus officia nemo asperiores doloribus impedit nihil iusto suscipit voluptas quo! Pariatur asperiores, ullam voluptates temporibus facilis adipisci error rerum velit consequuntur expedita nulla ea doloremque consectetur harum praesentium eligendi ipsum aspernatur sint quisquam et inventore impedit doloribus molestias! Quis, asperiores! Quod officia neque voluptatum natus modi, delectus voluptatibus, sint eos non exercitationem rerum quidem. Dignissimos dolorem, optio expedita, minima impedit perspiciatis quasi odio aut incidunt, accusamus neque excepturi tempora officia provident consequuntur aliquid voluptates cumque laborum eius cupiditate hic. Maiores voluptatum enim quod omnis officiis aliquam et blanditiis cum dolore laborum fugit rerum reprehenderit voluptates sint iure velit excepturi ut inventore, rem ratione magnam voluptate! Fuga nostrum itaque et iusto perspiciatis consequatur praesentium nam rerum a, deserunt doloremque atque, facilis aliquid nihil autem pariatur aperiam cumque perferendis. Nostrum, possimus. Earum dolore ipsum a error, quas placeat eveniet illo cum eum expedita libero perferendis necessitatibus odio quibusdam ducimus officiis in? Veniam, enim quaerat, aliquid maiores reiciendis explicabo mollitia repellendus fuga perspiciatis minus soluta sit tenetur voluptatem illo libero iste ut, consequatur asperiores!</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, a iure, laudantium repellat molestiae ratione consectetur voluptatem illum commodi vel quos veritatis placeat officia non minima, tenetur dolorem. Temporibus officia nemo asperiores doloribus impedit nihil iusto suscipit voluptas quo! Pariatur asperiores, ullam voluptates temporibus facilis adipisci error rerum velit consequuntur expedita nulla ea doloremque consectetur harum praesentium eligendi ipsum aspernatur sint quisquam et inventore impedit doloribus molestias! Quis, asperiores! Quod officia neque voluptatum natus modi, delectus voluptatibus, sint eos non exercitationem rerum quidem. Dignissimos dolorem, optio expedita, minima impedit perspiciatis quasi odio aut incidunt, accusamus neque excepturi tempora officia provident consequuntur aliquid voluptates cumque laborum eius cupiditate hic. Maiores voluptatum enim quod omnis officiis aliquam et blanditiis cum dolore laborum fugit rerum reprehenderit voluptates sint iure velit excepturi ut inventore, rem ratione magnam voluptate! Fuga nostrum itaque et iusto perspiciatis consequatur praesentium nam rerum a, deserunt doloremque atque, facilis aliquid nihil autem pariatur aperiam cumque perferendis. Nostrum, possimus. Earum dolore ipsum a error, quas placeat eveniet illo cum eum expedita libero perferendis necessitatibus odio quibusdam ducimus officiis in? Veniam, enim quaerat, aliquid maiores reiciendis explicabo mollitia repellendus fuga perspiciatis minus soluta sit tenetur voluptatem illo libero iste ut, consequatur asperiores!</p>

          
        </div>

         
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
             
                <Image
                  src="userImg.jpeg"
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
              
              <Link className="text-blue-800">Adi</Link>
            </div>
          </div>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
          <div className="flex gap-2">
            <Link>
              <Image src="facebook.svg" />
            </Link>
            <Link>
              <Image src="instagram.svg" />
            </Link>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search/>
        </div>
      </div>

      
      <Comments/>
    </div>
  );
};

export default SinglePostPage;
