import React from 'react'
import AllCategoryLink from './AllCategoryLink'



const Cushion = '/pics/AllCategory/cusions.webp'
const Vase = '/pics/AllCategory/vase.webp'
const HomeStorage = '/pics/AllCategory/HomeStorage.webp'
const Lights = '/pics/AllCategory/lights.webp'

const Boat = '/pics/AllCategory/boatHeadphones.webp'
const Boult = '/pics/AllCategory/boultHeadphones.webp'
const Noise = '/pics/AllCategory/noiseHeadphones.webp'
const Zebronics = '/pics/AllCategory/zebronicsHeadphones.webp'

const _32InchTV = '/pics/AllCategory/32InchTV.webp'
const _43InchTV = '/pics/AllCategory/43InchTV.webp'
const _55InchTV = '/pics/AllCategory/55InchTV.webp'
const _65InchTV = '/pics/AllCategory/65InchTV.webp'

const Clothing = '/pics/AllCategory/clothing.webp'
const Footwear = '/pics/AllCategory/footwear.webp'
const Watches = '/pics/AllCategory/watches.webp'
const BagsAndWallets = '/pics/AllCategory/BagsAndWallets.webp'



const HomeItems = [
    {
        image: Cushion,
        text: 'Cushions, Covers, Bedsheets and more',
        url: '/',
    },
    {
        image: Vase,
        text: 'Vases, Decor and more',
        url: '/',
    },
    {
        image: HomeStorage,
        text: 'Home Storages',
        url: '/',
    },
    {
        image: Lights,
        text: 'Lighting Solutions',
        url: '/',
    },
];



const HeadphoneItems = [
    {
        image: Boat,
        text: 'Upto 75% Discount | boAt',
        url: '/',
    },
    {
        image: Boult,
        text: 'Upto 75% Discount | Boult',
        url: '/',
    },
    {
        image: Noise,
        text: 'Upto 75% Discount | Noise',
        url: '/',
    },
    {
        image: Zebronics,
        text: 'Upto 75% Discount | Zebronics',
        url: '/',
    },
];



const TVItems = [
    {
        image: _32InchTV,
        text: 'Bugdet TVs | Starting @7999',
        url: '/',
    },
    {
        image: _43InchTV,
        text: '4k TVs | No Cost EMI',
        url: '/',
    },
    {
        image: _55InchTV,
        text: 'Big Screen TVs | Upto 60% Off',
        url: '/',
    },
    {
        image: _65InchTV,
        text: 'Ultra Premium TVs | Upto 45% Off',
        url: '/',
    },
];



const ClothItems = [
    {
        image: Clothing,
        text: 'Clothing',
        url: '/',
    },
    {
        image: Footwear,
        text: 'Footwear',
        url: '/',
    },
    {
        image: Watches,
        text: 'Watches',
        url: '/',
    },
    {
        image: BagsAndWallets,
        text: 'Bags And Wallets',
        url: '/',
    },
];







const AllCategory = () => {
    return (
        <div className='py-10 px-5 text-center gap-y-6 bg-slate-200 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>


            {/* STYLE YOUR HOME SECTION */}

            <div className='mx-auto shadow-lg shadow-slate-400 w-72 bg-slate-100 p-3'>
                <h1 className='text-xl font-bold mb-3 w-full text-center'>Style Your Home</h1>
                <div className='grid grid-cols-2 gap-x-3 gap-y-6'>
                    {
                        HomeItems.map((item, index) =>
                            <AllCategoryLink key={index} image={item.image} text={item.text} url={item.url} />
                        )
                    }
                </div>
            </div>


            {/* BEST DISCOUNTS ON HEADPHONES SECTION */}

            <div className='mx-auto shadow-lg shadow-slate-400 w-72 bg-slate-100 p-3'>
                <h1 className='text-xl font-bold mb-3 w-full text-center'>Best Discounts on Headphones</h1>
                <div className='grid grid-cols-2 gap-x-3 gap-y-6'>
                    {
                        HeadphoneItems.map((item, index) =>
                            <AllCategoryLink key={index} image={item.image} text={item.text} url={item.url} />
                        )
                    }
                </div>
            </div>


            {/* GET THE BEST TV OF YOUR SIZE */}

            <div className='mx-auto shadow-lg shadow-slate-400 w-72 bg-slate-100 p-3'>
                <h1 className='text-xl font-bold mb-3 w-full text-center'>Get the best TV of your size</h1>
                <div className='grid grid-cols-2 gap-x-3 gap-y-6'>
                    {
                        TVItems.map((item, index) =>
                            <AllCategoryLink key={index} image={item.image} text={item.text} url={item.url} />
                        )
                    }
                </div>
            </div>


            {/* UPTO 0% OFF | STYLES FOR MEN */}

            <div className='mx-auto shadow-lg shadow-slate-400 w-72 bg-slate-100 p-3'>
                <h1 className='text-xl font-bold mb-3 w-full text-center'>Upto 60 % off | Styles for Men</h1>
                <div className='grid grid-cols-2 gap-x-3 gap-y-6'>
                    {
                        ClothItems.map((item, index) =>
                            <AllCategoryLink key={index} image={item.image} text={item.text} url={item.url} />
                        )
                    }
                </div>
            </div>





        </div>
    )
}

export default AllCategory