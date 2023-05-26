import useTitle from "../../hooks/useTitle";


const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div className='max-w-screen-xl  justify-between mx-auto mb-8'>
                <header className=' flex items-center justify-around  h-40'>
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
                </header>
                <div className='px-2'>
                    <div className='mt-5 rounded-lg border-l-indigo-100 shadow-lg p-4' data-aos="fade-up">
                        <h3 className='text-2xl font-semibold my-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </h3>
                        <p className='text-xl text-gray-700'>
                            An access token and refresh token are commonly used in authentication and authorization systems to provide secure access to resources on the client-side.
                        </p>
                        <br />
                        <p className='text-xl text-gray-700'>
                            <span className="font-bold"> Access tokens:</span> An access token is a credential that is issued by an authentication server when a user successfully authenticates. It is a short-lived token that grants access to specific resources or services on behalf of the user. Access tokens are typically included in the headers or authorization headers of API requests to authenticate the user.
                        </p>
                        <br />
                        <p className='text-xl text-gray-700'>
                            <span className="font-bold">Refresh tokens:</span> A refresh token is a long-lived token that is also issued by the authentication server alongside the access token. It is used to obtain a new access token once the current one expires. Refresh tokens are typically stored securely and used to request new access tokens without requiring the user to re-authenticate.


                        </p>
                        <br />
                        <ul className='list-disc list-inside '>
                            <h2 className='text-xl font-semibold my-2'>Working Process:</h2>
                            <li className='text-xl text-gray-700'>The client sends credentials (e.g., username and password) to the authentication server.</li>
                            <li className='text-xl text-gray-700'>The server verifies the credentials and, if valid, generates an access token and a refresh token.</li>
                            <li className='text-xl text-gray-700'>The access token is sent to the client, which includes it in subsequent requests to access protected resources.	</li>
                            <li className='text-xl text-gray-700'>When the access token expires, the client can send the refresh token to the authentication server.	</li>
                            <li className='text-xl text-gray-700'>The server verifies the refresh token and, if valid, issues a new access token. The refresh token may also be renewed or replaced during this process.	</li>
                            <li className='text-xl text-gray-700'>The client continues to use the new access token to access resources, and the cycle repeats when the new access token expires.</li>

                        </ul>

                        <br />
                        <p className='text-xl text-gray-700'>
                            Regarding storage on the client-side, it is important to handle access tokens and refresh tokens securely to prevent unauthorized access. Here are some common approaches:

                        </p> <br />
                        <p className='text-xl text-gray-700'>
                            <span className="font-bold"> Access tokens:</span> Store the access token in memory or in a secure HTTP-only cookie. This helps prevent cross-site scripting (XSS) attacks and makes it less susceptible to client-side vulnerabilities. Avoid storing access tokens in local storage or other client-side storage mechanisms that can be accessed by JavaScript.

                        </p>
                        <br />
                        <p className='text-xl text-gray-700'>
                            <span className="font-bold">Refresh tokens:</span> Store refresh tokens in a secure HTTP-only cookie or use browser storage mechanisms with proper security measures. It's important to protect refresh tokens since they have longer lifetimes and can be used to obtain new access tokens.

                        </p>
                        <p className='text-xl text-gray-700'>


                        </p>
                    </div>



                    <div className='mt-8 rounded-lg border-l-indigo-100 shadow-lg p-4' data-aos="fade-up">
                        <h3 className='text-2xl font-semibold my-2'>Compare SQL and NoSQL databases.
                        </h3>
                        <ul className='list-disc list-inside '>
                            <h2 className='text-xl font-semibold my-2'>SQL:</h2>
                            <li className='text-xl text-gray-700'>Stands for Structured Query Language. Relational database management system (RDBMS).</li>
                            <li className='text-xl text-gray-700'>Suitable for structured data with predefined schema.</li>
                            <li className='text-xl text-gray-700'>Data is stored in tables with columns and rows.	</li>
                            <li className='text-xl text-gray-700'>Requires vertical scaling to handle large volumes of data.	</li>
                            <li className='text-xl text-gray-700'>Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL Server	</li>

                        </ul>
                        <ul className='list-disc list-inside '>
                            <h2 className='text-xl font-semibold my-2'>NoSQL:</h2>
                            <li className='text-xl text-gray-700'>Stands for Not Only SQL. Non-relational database management system.

                            </li>
                            <li className='text-xl text-gray-700'>Suitable for unstructured and semi-structured data
                            </li>
                            <li className='text-xl text-gray-700'>Data is stored in collections or documents
                            </li>
                            <li className='text-xl text-gray-700'>Horizontal scaling is possible to handle large volumes of data
                            </li>
                            <li className='text-xl text-gray-700'>Examples: MongoDB, Cassandra, Couchbase, Amazon DynamoDB, Redis
                            </li>

                        </ul>

                    </div>

                    <div className='mt-8 rounded-lg border-l-indigo-100 shadow-lg p-4' data-aos="fade-up">
                        <h3 className='text-2xl font-semibold my-2'> What is express js? What is Nest JS?</h3>
                        <p className='text-xl text-gray-700'>Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
                        <br />
                        <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</p>
                        <br />
                        <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>


                        <p className='text-xl text-gray-700'> </p>
                    </div>


                    <div className='mt-8 rounded-lg border-l-indigo-100 shadow-lg p-4' data-aos="fade-up">
                        <h3 className='text-2xl font-semibold my-2'>What is MongoDB aggregate and how does it work?
                        </h3>
                        <p className='text-xl text-gray-700'>MongoDB Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                        </p>
                        <p className='text-xl text-gray-700'>One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on.  </p>
                        <p className='text-xl text-gray-700'>While there are other methods of obtaining aggregate data in MongoDB, the aggregation framework is the recommended approach for most work.

                        </p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Blog;