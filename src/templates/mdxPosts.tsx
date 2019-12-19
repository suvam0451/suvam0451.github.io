import * as React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Footer, Alert, QuickLinks } from "../components/Decorations";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { NavCard } from "../components/NavCard";
import { StatusCard } from "../components/StatusCard";
import {
	Row,
	Col,
	// Card,
	CardTitle,
	CardText,
	CardBody,
	CardHeader,
	Breadcrumb,
	// Button,
	BreadcrumbItem,
	Nav,
	NavbarBrand,
	NavItem,
	NavLink,
	Navbar,
	UncontrolledCollapse,
	UncontrolledDropdown,
	DropdownMenu,
	DropdownToggle,
	DropdownItem,
	Dropdown,
	Jumbotron,
	TabPane,
	TabContent,
} from "reactstrap";
import {
	Alignment,
	Button,
	Intent,
	Breadcrumbs,
	// Breadcrumb,
	IBreadcrumbProps,
	Icon,
	Card,
	// Navbar,
	NavbarHeading,
	NavbarDivider,
	NavbarGroup,
	Classes,
} from "@blueprintjs/core";
import { NavSection } from "../components/NavBar";
import styled from "@emotion/styled";
// import "./mdxPosts.css";

// const MyH1 = props => <h1 style={{color: "tomato"}} {...props}/>
// const MyParagraph = props => <p style={{ fontSize: "18px", lineHeight: 1.6 }} />

const Content = styled.div`
	margin: 0 auto;
	padding: 0.1rem 0.1rem;
`;

export default function PageTemplate(data: mdxProps) {
	// export default function PageTemplate({data: {mdx}}){
	return (
		<div className="p-1">
			<Helmet>
				{/*<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>*/}
			</Helmet>
			<NavSection />
			<div className="bg-gray-400 m-0 p-2">
				<Row>
					{/** List of all available tutorials + Skip to section(optional) */}
					<Col xs="12" sm="12" md="12" lg="12" xl="2">
						<Row>
							<StatusCard />
							<NavCard />
						</Row>
					</Col>
					{/** Main body of mdx post */}
					<Col xs="12" sm="12" md="12" lg="12" xl="7">
						{/*<h1>{data.data.mdx.frontmatter.title}</h1>*/}
						<div className="bg-gray-100 px-4 py-4 border rounded-lg shadow-md">
							<h4 className="text-teal-700 mb-4">
								{data.data.mdx.frontmatter.title}
							</h4>
							<MDXRenderer>{data.data.mdx.body}</MDXRenderer>
						</div>
					</Col>
					<Col xs="12" sm="12" md="12" lg="6" xl="3">
						<Row>
							<Col xs="12" sm="6" md="12" lg="6" xl="12">
								<Card>
									<h4>Related Contents</h4>
									<p>
										User created content used in WW APIs completely
										free. If you develop something cool using the
										tools, you can send us to be showcased here.
									</p>
									<Button>Visit Archives</Button>
								</Card>
							</Col>
							<Col xs="12" sm="6" md="12" lg="6" xl="12">
								<Card body xs="12" xl="12">
									{/* Used persistent quicklinks from components/persistent*/}
									<QuickLinks />
								</Card>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>

			<Footer />
		</div>
	);
}

interface mdxProps {
	data: {
		mdx: {
			id: number;
			body: any;
			frontmatter: {
				title: string;
			};
		};
	};
}

export const query = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
			}
		}
	}
`;