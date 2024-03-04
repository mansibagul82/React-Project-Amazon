import React from 'react'
import "./Home.css"
import Product from './Product';


function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' 
             src='https://m.media-amazon.com/images/I/61Pdr3h6MmL._SX3000_.jpg' alt=''/>
            <p className='para'>You are on amazon.com. You can also shop on Amazon India for milions of products with fast local delivery. <span className='span'>Click here to go to amazon.in</span> </p>
            <div className='home_row'>

                <Product 
                image = "https://m.media-amazon.com/images/I/71HN4P-pd5L._AC_SX522_.jpg" 
                title ='SAMSUNG Galaxy A53 5G A Series Cell Phone, Factory Unlocked Android Smartphone, 128GB, 6.5” FHD Super AMOLED Screen, 
                Long Battery Life, US Version, Black'
                rating = {5} 
                price = {372.00}
                />
                
                <Product 
                image = "https://m.media-amazon.com/images/I/61fgA1NCpZL._AC_UL480_FMwebp_QL65_.jpg" 
                title ='Sujeet Night Light, Night Lights Plug into Wall 4-Pack, Nightlight Plug in Night Light, Dusk to Dawn Night Lamp Led Night 
                Light for Kids Bedroom, Bathroom, Hallway Warm White'
                rating = {5} 
                price = {9.99}
                />
                
                <Product 
                image = "https://m.media-amazon.com/images/I/81JkIr6qKuL._AC_SX679_.jpg" 
                title ='Mueller Personal Blender for Shakes and Smoothies with 15 Oz Travel Cup and Lid, Juices, Baby Food, Heavy-Duty Portable 
                Blender & Food Processor, Grey'
                rating = {5} 
                price = {21.99}
                />
                
                <Product 
                image = "https://m.media-amazon.com/images/I/71RUgvGkpIL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                title ='BESYOU Beginner Guitar 38"All Wood Acoustic Guitar Starter Kit String Natural Matte Finish w/Gig Bag, Steel Strings, 
                Strap, Capo, For Beginners/Adults'
                rating = {4} 
                price = {88.99}
                />
            </div>

            <div className='home_row'>
               <Product 
                image = "https://m.media-amazon.com/images/I/71RUgvGkpIL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                title ='BESYOU Beginner Guitar 38"All Wood Acoustic Guitar Starter Kit String Natural Matte Finish w/Gig Bag, Steel Strings, 
                Strap, Capo, For Beginners/Adults'
                rating = {4} 
                price = {88.99}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/71qVXHjo6ZL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                title ='SQUISHMALLOWS Original Archie The Axolotl Premium Cloud Slime, 8 oz. Fluffy Slime, Cotton Candy Scented, 3 Fun Slime 
                Add Ins, Pre-Made Slime for Kids, Great 6 Year Old Toys, Super Soft Sludge Toy '
                rating = {4} 
                price = {7.99}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/616suF7t8aL._AC_SX679_.jpg " 
                title ='AGPTEK Smart Watch for Women, Smartwatch for Android and iOS Phones IP68 Waterproof Activity Tracker with Full Touch
                 Color Screen Heart Rate Monitor Pedometer Sleep Monitor, Pink '
                rating = {4} 
                price = {43.99}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/61CZSoSnVPL._AC_SX679_.jpg" 
                title ='Fitbit Versa 4 Fitness Smartwatch with Daily Readiness, GPS, 24/7 Heart Rate, 40+ Exercise Modes, Sleep Tracking and 
                more, Black/Graphite, One Size (S & L Bands Included)'
                rating = {4} 
                price = {199.95}
                />
            </div>

            <div className='home_row'>
                <Product 
                image = "https://m.media-amazon.com/images/I/31X0j4aD37L._SY445_SX342_.jpg" 
                title ='Mostly What God Does: Reflections on Seeking and Finding His Love Everywhere'
                rating = {4} 
                price = {19.41}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/5112eIqM9pL._SY445_SX342_.jpg " 
                title ='The Women: A Novel Hardcover '
                rating = {5} 
                price = {19.19}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/41C-012Es8L._SY445_SX342_.jpg" 
                title ='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones '
                rating = {5} 
                price = {13.79}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/41yzzcHjHCL._SY445_SX342_.jpg" 
                title ='The Psychology of Money: Timeless lessons on wealth, greed, and happiness  '
                rating = {4} 
                price = {10.86}
                />

            </div>

            <div className='home_row'>
                <Product 
                image = "https://m.media-amazon.com/images/I/81whTB488bL._SX522_.jpg" 
                title ='Meta Quest 3 128GB— Breakthrough Mixed Reality — Powerful Performance'
                rating = {4} 
                price = {499}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/41ase5TZkbL._SY430_SX215_QL70_FMwebp_.jpg" 
                title ='The Legend of Zelda: Tears of the Kingdom - Nintendo Switch (US Version)'
                rating = {4} 
                price = {53.69}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/219mCNXB1iL._SY300_SX300_QL70_FMwebp_.jpg" 
                title =' PlayStation®5 console (slim)'
                rating = {4} 
                price = {499}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/91aTd-k35qL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                title ='Marvel Avengers Action Figures - Iron Man, Hulk, Black Panther, Captain America, 
                Spider Man, Ant Man, War Machine & Falcon! (8)'
                rating = {4} 
                price = {45.93}
                />
            </div>

            <div className='home_row'>
                <Product 
                image = "https://m.media-amazon.com/images/I/91AJG0zr8kL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                title =' JFLORU Spring Wreath with Spring Garland,20 Inch Spring Summer Flower Wreaths and 5
                 Feet Floral Garland Spring Wreaths for Front Door and Garland for Home Decor Season Celebration(Multicolor)'
                rating = {5} 
                price = {29.99}
                />
                
                <Product 
                image = "https://m.media-amazon.com/images/I/71NSwJDo3qL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                title ='Metal Wall Mirrors Decor for Living Room Ginkgo Leaf Design 47" Big Wall-Mounted Mirrors Large Wall Decor
                 for Entryway Vanity Bedroom Living Room Bathroom'
                rating = {3} 
                price = {99.00}
                />
                
                <Product 
                image = "https://m.media-amazon.com/images/I/61wmvaVkFOL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                title ='Hodao Easter Bunny Decorations Spring Home Decor Bunny Figurines(Easter White Rabbit 2pcs)'
                rating = {4} 
                price = {19.55}
                />
                
                <Product 
                image = "https://m.media-amazon.com/images/I/81A80vhE27L.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                title ='Riceshoot 3 Pcs Easter Wreath Decoration Kit 16 LED Artificial Easter Egg Wreath and 2 Pcs 6Ft
                 Lighted Easter Garland Spring Wreath Garland for Mantle Front Door Fireplace Window Home Easter Decor'
                rating = {4} 
                price = {43.99}
                />
            </div>

            
            <div className='home_row'>
                <Product 
                image = "https://m.media-amazon.com/images/I/41DY03NtKKL._SX300_SY300_QL70_FMwebp_.jpg" 
                title ='BREYLEE Aloe Vera Eye Mask– 60 Pcs - Puffy Eyes and Dark Circles Treatments – Look Younger and Reduce 
                Wrinkles and Fine Lines Undereye, Improve 
                and Firm eye Skin - Pure Natural Material Extraction'
                rating = {4} 
                price = {9.99}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/611Buwawk6L._SX522_.jpg" 
                title ='e.l.f. Halo Glow Liquid Filter, Complexion Booster For A Glowing, Soft-Focus Look, Infused With Hyaluronic
                 Acid, Vegan & Cruelty-Free, 0 Fair'
                rating = {4} 
                price = {14.00}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/41mcGqIcfPL._SX300_SY300_QL70_FMwebp_.jpg" 
                title ='PURA DOR 4 Oz ORGANIC Vitamin E Oil Blend 70,000 IU - 100% Natural Hexane Free, Sweet Almond, Apricot, Jojoba,
                 Argan, Rosehip, Sunflower & Avocado Bath Oil For Scars, Skin, Face & Full Body'
                rating = {4} 
                price = {22.10}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/419uf-5kuNL._SX300_SY300_QL70_FMwebp_.jpg" 
                title ='Olay Super Serum 1.0 oz with Niacinamide, Vitamin C, Collagen Peptide, AHA, and Vitamin E'
                rating = {4} 
                price = {29.94}
                />
            </div>
           
            <div className='home_row'>

                <Product 
                image = "https://m.media-amazon.com/images/I/714reGgb8mL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                title ='WMT USB Microphone - Condenser Gaming Microphone for PC/MAC/PS4/PS5/Phone- Cardioid Mic with Brilliant RGB Lighting Headphone Output 
                Volume Control, Mute Button, for Streaming Podcast YouTube Discord'
                rating = {4} 
                price = {29.97}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/61hw8FBKBSL._AC_SX522_.jpg" 
                title ='TONOR USB Microphone, Computer Cardioid Condenser PC Gaming Mic with Tripod Stand & Pop Filter for Streaming, Podcasting, Vocal 
                Recording, Compatible with Laptop Desktop Windows Computer, TC-777'
                rating = {4} 
                price = {31.99}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/81JWhEz4GDL._AC_SX679_.jpg" 
                title ='Alesis Melody 61 Key Keyboard Piano for Beginners with Speakers, Stand, Bench, Headphones, Microphone, Sheet Music Stand, 300 Sounds 
                and Music Lessons'
                rating = {4} 
                price = {136.29}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/61-18UB3WWL._AC_SX466_.jpg" 
                title ='Wireless Earbuds Bluetooth V5.3 Headphones 50H Playback Deep Bass Stereo Ear Buds with LED Power Display Charging Case IPX7 Waterproof
                 Earphones with Mic Headset for Laptop Pad Android/iOS Phones'
                rating = {4} 
                price = {25.99}
                />

            </div>

            <div className='home_row'>
                <Product 
                image = "https://m.media-amazon.com/images/I/51+v73gZ1KL._AC_SY606_.jpg" 
                title ='SIRIL Womens Bandhani Printed Embroidery Lace Georgette Saree'
                rating = {3} 
                price = {29.99}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/61faRBvx9zL._AC_SY606_.jpg" 
                title ='AUTOMET Womens Two Piece Outfits 2 Piece Lounge Matching Sets Fleece Sweatsuit Sweat Shorts Fashion Fall Clothes Sweatshirt'
                rating = {4} 
                price = {36.99}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/61A35QtsOoL._AC_SY679_.jpg" 
                title ='SKAVIJ Mens Art Silk Kurta Pajama Indian Traditional Suit Wedding Party Set'
                rating = {4} 
                price = {48.99}
                />

                <Product 
                image = "https://m.media-amazon.com/images/I/71mSgrSHKKL._AC_SX466_.jpg" 
                title ='COOFANDY Mens 2 Pieces Linen Set Henley Shirt Short Sleeve and Shorts Summer Beach Yoga Matching Outfits'
                rating = {4} 
                price = {39.99}
                />
            
            </div>
{/* 
            <div className='home_row'>
                <Product/>
            </div>

            <div className='home_row'>
                <Product/>
            </div>

            <div className='home_row'>
                <Product/>
            </div> */}
        </div>
    </div>
  )
}

export default Home;

