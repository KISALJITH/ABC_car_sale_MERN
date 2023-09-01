import React from 'react'
import { Table } from 'reactstrap'

const AllOwners = () => {
  return (
    <Table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>NIC</th>
            <th>Contact</th>
            <th>Address</th>
            <th>District</th>
            <th>Cars</th>

            
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">3522</th>
            <td>P.H.M.Perera</td>
            <td>627951320V</td>
            <td>+94761185033</td>
            <td>No 3/57, Kelin Vidiya, Kandana</td>
            <td>Western</td>
            <td><div><button  className='post-btn'> Cars</button></div></td>
            </tr>

            <tr>
            <th scope="row">3522</th>
            <td>P.H.M.Perera</td>
            <td>627951320V</td>
            <td>+94761185033</td>
            <td>No 3/57, Kelin Vidiya, Kandana</td>
            <td>Western</td>
            <td><div><button  className='post-btn'> Cars</button></div></td>
            </tr>

            <tr>
            <th scope="row">3522</th>
            <td>P.H.M.Perera</td>
            <td>627951320V</td>
            <td>+94761185033</td>
            <td>No 3/57, Kelin Vidiya, Kandana</td>
            <td>Western</td>
            <td><div><button  className='post-btn'> Cars</button></div></td>
            </tr>

            
        </tbody>
    </Table>
  )
}

export default AllOwners