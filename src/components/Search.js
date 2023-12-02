import React from 'react'
import styled from 'styled-components'

function Search() {
    const dep = ['Category', 'Growing Internet', 'Community Network', 'Internet exchange point', 'Measuring the internet']
    const cat = {
      'Category': ['f', 'a', 'd'],
      'Growing Internet': ['s', 'f'],
      'Community Network': ['s', 'f'],
      'Internet exchange point': ['s', 'f'],
      'Measuring the internet': ['s', 'f'],
    }
  
    const states = ['Region', 'Africa', 'Asia Pacific', 'Eroupe', 'North America']
    const region = {
      'Region': ['f', 'a', 'd'],
      'Africa': ['s', 'f'],
      'Asia Pacific': ['s', 'f'],
      'Eroupe': ['s', 'f'],
      'North America': ['s', 'f'],
    }

    
    const [names, setNames] = useState(data)

    const filterNames = e => {
      const search = e.target.value.toLowerCase()
      const filterNames = data.filter(names => names.username.toLowerCase().include(search))
      setNames(filteredNames)
    }

  return (
    <Container>
        <h1>Latest Posts</h1>
      <Searchs>
          <SearchInput type='text' onChange={(e) => filterNames(e)} placeholder="Search by keyword"/>
          <select>
            {
              dep.map(state =>{
                return<option>{state}</option>
              })
            }
          </select>
          <select>
            {
              states.map(state =>{
                return<option>{state}</option>
              })
            }
          </select>
        </Searchs>
        <button>Reset</button>
    </Container>
  )
}

export default Search

const Container = styled.div`
  
  h1 {
    font-weight: normal;
    color: gray;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 5rem;
    background: #eeca4a;
    color: white;
    padding: .5rem 1.4rem;
    font-size: .8rem;
    float: center;
   }
`
const Searchs = styled.div`
@media(max-width: 768px){
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media(min-width: 768px){
  display: flex;
  gap: 25px;
  justify-content: center;
}

   select {
    display: block;
    margin-bottom: 1rem;
    padding: .5rem;
    border-radius: .3rem;
    outline: none;
    width: 300px;
    text-align: left;
   }

   
`
const SearchInput = styled.input`
  display: block;
  margin-bottom: 1rem;
  padding: .5rem .5rem;
  border: 1px solid gray;
  border-radius: .3rem;
  outline: none;
  width: 284px;
  text-align: left;
`