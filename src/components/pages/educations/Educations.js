import React from 'react';
//import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Institute/College</th>
								<th>Course</th>
								<th>Percentage</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Guru Tegh Bahadur Institute of Technology </td>
								<td>BTech : Information Technology</td>
								<td>
								85.51
								</td>
							</tr>
							<tr>
								<td>St. George's School, Alaknanda</td>
								<td>CBSE Board : 12th</td>
								<td>
									76.80
								</td>
							</tr>
							<tr>
							<td>St. George's School, Alaknanda</td>
								<td>CBSE Board : 10th</td>
								<td>
									83.60
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
