import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
    color: #e879bb;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    color: white;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    background: #121212;
    color: white;
`
const Option = styled.option`
    margin: 20px;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>T-Shirts</Title>
            <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        color
                    </Option>
                    <Option>White/Pink</Option>
                    <Option>Black/White</Option>
                    <Option>White/black</Option>
                    <Option>Black/White</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>2XL</Option>
                </Select>
                </Filter>

                <Filter><FilterText>Sort Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        color
                    </Option>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
                </Filter>


            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
