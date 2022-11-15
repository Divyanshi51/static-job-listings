import React from 'react';
import Data from '../data.json';
 import FilterBar from './FilterBar';


const Joblist = () => {
  // let node = document.getElementsByClassName('tablets');
  // console.log(node);
  const tablets = new Set();
  let array;
  tablets.add("this is tablet");
  const clickFunc = (e) => {
    console.log("clicked");
    // console.log(e.target.innerHTML);
    tablets.add(e.target.innerHTML)
    // console.log(tablets);
    array = [...tablets];
    // console.log(array);
  }
  
  return (
    <>
    <FilterBar tablets={array}/>
    <div className='Job_list_container'>
      {Data && Data.map(company => {
        return (
          <div className='Company' key={company.id}>
            <div className='imgContainer'><img className='CompanyLogo' src={company.logo} alt="logo img" /></div>
            <div className='aboutTheCompany'>
              <div className='companyProfile'>
                <div className='company-new-featured  '><div className='companyName'>{company.company}</div>
                  {company.new && <div className='new'>NEW!</div>}
                  {company.featured && <div className='featured'>FEATURED</div>}
                </div>
              </div>
              <div className='Position'>{company.position}</div>
              <div className='postedAt-contract-location'><div className='postedAt'>
                {company.postedAt}
              </div><p>.</p>
                <div className='contract'>{company.contract}</div><p>.</p>
                <div className='location'>{company.location}</div>
              </div>
            </div>
            <div className='role-level-language-tools'>
              <div className='role' value={company.role} onClick={clickFunc}>{company.role}</div>
              <div className='level'>{company.level}</div>

              {company.languages && company.languages.map(lang => {
                return (
                  <div className='lang' >{lang}</div>)
              })}

              {company.tools && company.tools.map(tool => {
                return (
                  <div className='tool' >{tool}</div>)
              })}
            </div>
          </div>
        )
      })
      }
    </div>
    </>
  )
}

export default Joblist
