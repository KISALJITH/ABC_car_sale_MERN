import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'reactstrap'

const AllCars = () => {
  return (
    <Table>
        <thead>
            <tr>
            <th>Car ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Type</th>
            <th>Price</th>
            <th>Owner</th>
            <th>Contact</th>

            
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Tesla Malibu</td>
            <td>340-x</td>
            <td>2015</td>
            <td>SUV</td>
            <td>Rs.8000000.00</td>
            <td className='owner_name'><Link>S.A.A.D.Peris</Link></td>
            <td>+94778575899</td>
            <td><div><button  className='post-btn'>Edit</button></div></td>
            </tr>

            <tr>
            <th scope="row">1</th>
            <td>Tesla Malibu</td>
            <td>340-x</td>
            <td>2015</td>
            <td>SUV</td>
            <td>Rs.8000000.00</td>
            <td><Link>S.A.A.D.Peris</Link></td>
            <td>+94778575899</td>
            <td><div><button className='post-btn'>Edit</button></div></td>
            </tr>

            <tr>
            <th scope="row">1</th>
            <td>Tesla Malibu</td>
            <td>340-x</td>
            <td>2015</td>
            <td>SUV</td>
            <td>Rs.8000000.00</td>
            <td><Link>S.A.A.D.Peris</Link></td>
            <td>+94778575899</td>
            <td><div><button className='post-btn' >Edit</button></div></td>
            </tr>

            
        </tbody>
    </Table>
  )
}

export default AllCars