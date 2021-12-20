import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactSlider from 'react-slider';
import { getBrandList } from '../../api/api';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { changeFilterPriceAc, fetchProdBrand, fetchProducts } from '../../store/actions/product';
import './Filter.css';

type FilterProps = {
    setGrid: (mode : boolean) => void,
    grid : boolean
}
export const Filter = memo(({ setGrid,grid }: FilterProps) => {
    const dispatch = useDispatch();
    const { filters, section } = useTypedSelector(state => state.productReducer);
    const [filterPrice, setFilterPrice] = useState([...filters.price]);
    const [brandList, setBrandList] = useState(['']);

    const onFilterPriceChange = (value: any) => {
        dispatch(changeFilterPriceAc(value))
        setFilterPrice(value);
    }
    const onSelectorCh = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === 'all') {
            dispatch(fetchProducts(section));
        } else {
            dispatch(fetchProdBrand(section, e.target.value));
        }
    }

    useEffect(() => {
        const fetchBrandList = async () => {
            
            const response = await getBrandList(section);
            if(response.data){
                setBrandList(Object.keys(response.data));
            }
            
        }
        fetchBrandList();
    }, [section]);

    const onGridClick = () => setGrid(true);
    const onBlockClick = () => setGrid(false);

    return (
        <>

            <div className="filter_section">
                <div className='all_filters'>
                    <div className="InputRange_container">
                        <span>{filterPrice[0]}</span>
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            value={filterPrice}
                            max={40000}
                            min={9000}
                            onChange={value => onFilterPriceChange(value)}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => <div  {...props}>{state.valueNow}</div>}
                            pearling
                            minDistance={1000}
                        />
                        <span>{filterPrice[1]}</span>
                    </div>

                    <select className="filter_selector">
                        <option>Gender</option>
                        <option >Unisex</option>
                        <option >Male</option>
                    </select>
                    <select className="filter_selector" onChange={onSelectorCh}>
                        <option value="all">Brand</option>
                        {
                            brandList.map((brand, i) => {
                                return <option key={`${brand}%${i}`} value={brand} >{brand}</option>
                            })
                        }
                    </select>
                    <select className="filter_selector">
                        <option>Size</option>
                        <option >36</option>
                        <option >37</option>
                        <option >38</option>
                    </select>
                </div>
                <div className="modes">
                    <button onClick = {onGridClick}  className = {grid ? 'active_mode':''}>Grid</button>
                    <button onClick = {onBlockClick} className = {!grid ?'active_mode':''}>Block</button>
                </div>
            </div>

        </>
    )
})