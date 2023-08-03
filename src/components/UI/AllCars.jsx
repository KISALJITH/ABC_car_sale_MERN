import React from 'react'
import { Table, Button } from 'reactstrap'

const AllCars = () => {
  return (
    <Table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Type</th>
            <th>Price</th>
            <th>Owner</th>
            <th>Post</th>

            
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
            <td><a>S.A.A.D.Peris</a></td>
            <td><div><Button  className='post-btn'>Post</Button></div></td>
            </tr>

            <tr>
            <th scope="row">1</th>
            <td>Tesla Malibu</td>
            <td>340-x</td>
            <td>2015</td>
            <td>SUV</td>
            <td>Rs.8000000.00</td>
            <td>S.A.A.D.Peris</td>
            <td><div><Button className='post-btn'>Post</Button></div></td>
            </tr>

            <tr>
            <th scope="row">1</th>
            <td>Tesla Malibu</td>
            <td>340-x</td>
            <td>2015</td>
            <td>SUV</td>
            <td>Rs.8000000.00</td>
            <td>S.A.A.D.Peris</td>
            <td><div><Button className='post-btn' >Post</Button></div></td>
            </tr>

            
        </tbody>
    </Table>
  )
}

export default AllCars