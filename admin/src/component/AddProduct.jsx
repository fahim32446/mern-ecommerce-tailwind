import React, { useState, useEffect } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../src/firebase'
import LoadingButton from './LoadingButton';
import { createProduct, updateProduct } from '../redux/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from './AllProduct/Loading';
import { sizes, colors, categories } from '../assets/Doc';

const AddProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({ title: '', description: '', image: '', price: '' });
    const [category, setCategory] = useState([]);
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const [file, setFile] = useState(null);
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    let navigate = useNavigate();


    const products = useSelector((state) => (id ? state.products.products.find((product) => product._id === id) : ''));

    console.log({ ...product, size, color, category });

    useEffect(() => {
        if (id) {
            setProduct(products);
        }
    }, []);




    const imageHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const filename = new Date().getTime() + file?.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, filename);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        setLoad(true);
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setLoad(false);
                    setProduct({ ...product, image: downloadURL });

                });
            }
        );
    }

    const handleSize = (e) => {
        const { value, checked } = e.target;
        checked ? setSize([...size, value]) : setSize(size.filter((e) => e !== value))
    }

    const handleColor = (e) => {
        const { value, checked } = e.target;
        checked ? setColor([...color, value]) : setColor(color.filter((e) => e !== value))
    }


    const handleCategories = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCategory([...category, value]);
        } else {
            setCategory(category.filter((e) => e !== value));
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {

            dispatch(updateProduct({ ...product, size, color, category }));
            navigate("../allProducts", { replace: true });
        } else {
            dispatch(createProduct({ ...product, size, color, category }));
            navigate("../allProducts", { replace: true });
        }
    }




    return (
        <div className={load ? 'cursor-wait w-full' : `w-full`} >

            <div className="grid grid-cols-12 gap-1">

                <div className="mb-6 col-span-12">
                    <label htmlFor="default-input" className='block mb-2 text-sm font-medium text-gray-700' >Product Name</label>

                    <input value={product.title} onChange={(e) => setProduct({ ...product, title: e.target.value })} type="text" id="default-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Name...' />
                </div>

                <div className="mb-6 col-span-12">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-700 ">Product Description</label>
                    <textarea value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Product Details..."></textarea>
                </div>


                <div className="mb-6 col-span-6 p-2">

                    <input onChange={imageHandler} type="file" className="block w-full text-sm text-slate-500 border p-1 rounded-lg
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-violet-50 file:text-violet-700
                                        hover:file:bg-violet-100"/>

                </div>

                <div className='mb-6 col-span-6 p-3'>
                    <input value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} type="number" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Product Price...' />
                </div>



                <div className="mb-6 row-span-2 col-span-3 p-2">
                    <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200">
                        {sizes.map((item, index) => (
                            <li key={index} className="w-full rounded-t-lg border-b border-gray-200 ">
                                <div className="flex items-center pl-3">
                                    <input id={item.name} value={item.name} onChange={handleSize} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label htmlFor={item.name} className="py-3 ml-2 w-full text-sm font-medium text-gray-900">{item.name}</label>
                                </div>   </li>))}  </ul> </div>

                <div className="mb-6 row-span-2 col-span-3 p-2">
                    <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200">

                        {categories.map((cat, index) => (
                            <li key={index} className="w-full rounded-t-lg border-b border-gray-200 ">
                                <div className="flex items-center pl-3">

                                    <input id={cat.name} value={cat.name} onChange={handleCategories} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />

                                    <label htmlFor={cat.name} className="py-3 ml-2 w-full text-sm font-medium text-gray-900">{cat.name}</label>
                                </div>
                            </li>
                        ))}
                    </ul>


                </div>


                <div className="mb-6 col-span-3 p-2">
                    <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200">

                        {colors.map((item, index) => (
                            <li key={index} className="w-full rounded-t-lg border-b border-gray-200 ">
                                <div className="flex items-center pl-3">
                                    
                                    <input id={item.name} value={item.code} onChange={handleColor} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                                    <label htmlFor={item.name} className="py-3 ml-2 w-full text-sm font-medium text-gray-900">{item.name} </label>

                                </div>
                            </li>
                        ))}
                    </ul>


                </div>


                <div div className="mb-6 col-span-3 p-2" >

                    {load ? <LoadingButton /> : (
                        <button onClick={handleSubmit} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-100 w-full focus:outline-none bg-violet-700 rounded-lg border border-gray-200 hover:bg-green-700">Publish</button>
                    )}

                </div >

            </div >

        </ div>

    )

}

export default AddProduct