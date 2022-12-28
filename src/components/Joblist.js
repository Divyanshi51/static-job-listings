import React from 'react';
import Data from '../data.json';
import FilterBar from './FilterBar';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../reduxToolkit/Slice'

const Joblist = () => {
  const { filterTablets } = useSelector(state => state.filterArray)

  const dispatch = useDispatch()

  const addvalue = (event) => {
    dispatch(add(event.target.innerText))
  }

  const search = Data.filter(company => company.level.includes(filterTablets.map(i => i)) && company.role.includes(filterTablets.map(i => i)))

  console.log(search)
  return (
    <>
      <div className='Job_list_container'>
        {filterTablets.length !== 0 && <FilterBar />}
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
                <div className='role' value={company.role} onClick={(event) => addvalue(event)}
                >{company.role}</div>
                <div className='level' onClick={(event) => addvalue(event)}>{company.level}</div>

                {company.languages && company.languages.map(lang => {
                  return (
                    <div className='lang' key={lang} onClick={(event) => addvalue(event)}>{lang}</div>)
                })}

                {company.tools && company.tools.map(tool => {
                  return (
                    <div className='tool' key={tool} onClick={(event) => addvalue(event)} >{tool}</div>)
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
