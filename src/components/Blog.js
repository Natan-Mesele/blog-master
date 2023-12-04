import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Blog.css";
import axios from "axios";

const dep = [
  "Category",
  "Growing Internet",
  "Community Network",
  "Internet exchange point",
  "Measuring the internet",
];
const cat = {
  Category: ["f", "a", "d"],
  "Growing Internet": ["s", "f"],
  "Community Network": ["s", "f"],
  "Internet exchange point": ["s", "f"],
  "Measuring the internet": ["s", "f"],
};

const states = ["Region", "Africa", "Asia Pacific", "Eroupe", "North America"];
const region = {
  Region: ["f", "a", "d"],
  Africa: ["s", "f"],
  "Asia Pacific": ["s", "f"],
  Eroupe: ["s", "f"],
  "North America": ["s", "f"],
};

function Blog() {
  //fetching

  const [blogList, setBlogList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState([]);
  const [filterValuem, setFilterValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);
  const blogPerPage = 8;

  const getRef = async () => {
    await axios.get("https://new-blo.prismic.io/api/v2").then((ref) => {
      console.log(ref.data.refs[0].ref, "reference");
      getBlog(ref.data.refs[0].ref);
    });
  };
  const getBlog = async (ref) => {
    await axios
      .get(
        `https://new-blo.prismic.io/api/v2/documents/search?ref=${ref}#format=json`
      )
      .then((ref) => {
        console.log(ref.data.results, "data fetch");
        setBlogList(ref.data.results);
        setFiltered(ref.data.results);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    getRef();
  }, []);

  console.log(filterValuem);

  const handelFiltereByKeyWord = (e) => {
    setFilterValue(e.target.value);
    setFiltered(
      JSON.parse(JSON.stringify(blogList))
        .filter((blog) => blog.data["blog-image"] != null)
        .filter((blog) => blog.data.title[0].text.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
    );
  };
  const handelFiltereByCategory = (e) => {
    setFilterValue(e.target.value);
    setFiltered(
      JSON.parse(JSON.stringify(blogList))
        .filter((blog) => blog.data["blog-image"] != null)
        .filter((blog) => blog.data.title[0].text.indexOf(e.target.value) > -1)
    );
  };

  const paginateHandler = (page) => {
    const newlist = filtered.slice(
      blogPerPage * page,
      blogPerPage * page + blogPerPage
    );
    // setVisibleBlogs(newlist);
  };

  useEffect(() => {
    if (isLoaded) {
      paginateHandler(pageNumber);
    }
  }, [isLoaded]);

  return (
    <div className="App">
      <SearchContainer>
        <h1>Latest Posts</h1>
        <Searchs>
          <SearchInput
            type="text"
            placeholder="Search by keyword"
            value={filterValuem}
            onChange={handelFiltereByKeyWord}
          />
          <select>
            {dep.map((state) => {
              return <option>{state}</option>;
            })}
          </select>
          <select>
            {states.map((state) => {
              return <option>{state}</option>;
            })}
          </select>
        </Searchs>
        <button>Reset</button>
      </SearchContainer>
      <React.Fragment>
        <Container>
          {//visibleBlogs //.slice(blogPerPage*pageNumber, blogPerPage)
         [...filtered.slice(
            blogPerPage * pageNumber,
            (blogPerPage * pageNumber) + blogPerPage
          )]
            .filter((blog) => blog.data["blog-image"] != null)
            .map((blog) => {
              // console.log(blog,"each blog")
              return (
                <News>
                  <img src={blog.data["blog-image"].url} />
                  <NewsInfo>
                    <Date>
                      <span>{blog.data.description["published-date"]}</span>
                    </Date>
                    <Title>
                      <Link to="./detail">{blog.data.title[0].text}</Link>
                    </Title>
                    <Desc>
                      <p>{blog.data.description[0].text}</p>
                    </Desc>
                  </NewsInfo>
                </News>
              );
            })}
        </Container>
      </React.Fragment>
      <Pagination>
          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            onClick={() => {
              if( pageNumber - 1>=0)
            { setPageNumber(
                  pageNumber -1
              );
              }
            }}
          >
            {"<"}
          </button>
          {filtered <= 6 ? (
            <> 1</>
          ) : (
            Array.from(
              { length: Math.ceil(filtered.length / blogPerPage) },
              (x, i) => i
            ).map((p) => <div>{p + 1}</div>)
          )}
          <button
            onClick={() => {
              if( Math.ceil(filtered.length / blogPerPage) > pageNumber + 1)
            { setPageNumber(
                  pageNumber + 1
              );
          }
            }}
          >
            {">"}
          </button>
        </div>
      </Pagination>
      
    </div>
  );
}

export default Blog;

const Container = styled.div`
  margin: 1rem;

  @media (min-width: 768px) {
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 10rem;
    padding: 0 4rem;
  }
`;
const News = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  background: #eeeded;
  padding: 1rem;

  img {
    width: 100%;
    height: 15em;
    object-fit: cover;
  }
`;
const NewsInfo = styled.div`
  margin-top: 1rem;
`;
const Date = styled.div`
  font-size: 0.7rem;
  color: gray;
  margin-bottom: 0.8rem;
`;
const Title = styled.div`
  a {
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
  }
`;
const Desc = styled.div`
  p {
    font-size: 0.9rem;
    line-height: 1.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
const SearchContainer = styled.div`
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
    padding: 0.5rem 1.4rem;
    font-size: 0.8rem;
    float: center;
  }
`;
const Searchs = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 25px;
    justify-content: center;
  }

  select {
    display: block;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    outline: none;
    width: 300px;
    text-align: left;
  }
`;
const SearchInput = styled.input`
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem 0.5rem;
  border: 1px solid gray;
  border-radius: 0.3rem;
  outline: none;
  width: 284px;
  text-align: left;
`;

const Pagination = styled.div`
  padding: 2rem;
  
  button {
    padding: .3rem .4rem;
    border: 1px solid gray;
    cursor: pointer;
  }
`
