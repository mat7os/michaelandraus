import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Trabajos.scss';

const Skills = () => {
	const [experiences, setExperiences] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const experiencesQuery = '*[_type == "experiences"] | order(order asc)';
		const query = '*[_type == "skills"] | order(order asc)';

		client.fetch(experiencesQuery).then((data) => {
			setExperiences(data);
		});

		client.fetch(query).then((data) => {
			setSkills(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">
				Habilidades <span>&</span> Experiencias
			</h2>
			<div className="app__skills-container">
				<motion.div className="app__skills-list" key="skills-list">
					{skills?.map((skill, index) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={index + skill.name}
						>
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}
								key={skill.name + index}
							>
								<img src={urlFor(skill.icon)} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div className="app__skills-exp">
					{experiences?.map((experience, index) => (
						<motion.div className="app__skills-exp-item pl-20 sm:pl-0" key={experience.year}>
							<div
								className="app__skills-exp-year"
								key={experience.year + index}
							>
								<p className="bold-text">{experience.year}</p>
							</div>

							<motion.div className="app__skills-exp-works" key={index}>
								{experience.works.map((work, index) => (
									<>
										<motion.div
											whileInView={{ opacity: [0, 1] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work"
											data-tip
											data-for={work.name}
											key={work.name}
										>
											<h4 className="bold-text" key={'h4' + index}>
												{work.name}
											</h4>
											<p className="p-text" key={'p' + index}>
												{work.company}
											</p>
										</motion.div>
										<ReactTooltip
											id={work.name}
											effect="solid"
											arrowColor="#fff"
											className="skills-tooltip"
											key={work.desc + 'reactTooltip'}
										>
											{work.desc}
										</ReactTooltip>
									</>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, 'app__skills'),
	'trabajos',
	'app__whitebg',
);
