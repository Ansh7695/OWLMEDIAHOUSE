import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from "../../assets/assets";

// Simple utility function
const cn = (...classes) => classes.filter(Boolean).join(' ');

const projects = [
	{
		name: "Midas Logix",
		description: "Strategic campaigns that drive engagement and conversions through data-driven insights.",
		image: assets.MidasLogex,
		tags: ["Strategy", "Analytics"],
		gradient: "from-red-500/20 to-orange-500/20",
	},
	{
		name: "Digital Marketing Academy",
		description: "Bringing stories to life with captivating motion graphics and dimensional artistry.",
		image: assets.DigitalMarketingAcademy,
		tags: ["Motion", "Design"],
		gradient: "from-orange-500/20 to-yellow-500/20",
	},
	{
		name: "Code With Piyush",
		description: "Professional video production that captures authentic moments and compelling narratives.",
		image: assets.Codewithpiyush,
		tags: ["Production", "Streaming"],
		gradient: "from-gray-600/20 to-gray-800/20",
	},
	{
		name: "Stake",
		description: "Boosted brand reach with performance marketing strategies.",
		image: assets.Stake,
		tags: ["Frontend", "Backend"],
		gradient: "from-blue-500/20 to-blue-700/20",
	},
	{
		name: "INDIBET",
		description: "Powered growth through strategic performance marketing.",
		image: assets.INDIBET,
		tags: ["iOS", "Android"],
		gradient: "from-purple-500/20 to-purple-700/20",
	},
	{
		name: "BLITZ POOLS",
		description: "Managed performance marketing to maximize ROI.",
		image: assets.Blitzpools,
		tags: ["Identity", "Visual"],
		gradient: "from-green-500/20 to-green-700/20",
	},
	{
		name: "PARI MATCH",
		description: "xecuted a performance marketing campaign for measurable growth.",
		image: assets.Parimatch,
		tags: ["Identity", "Visual"],
		gradient: "from-green-500/20 to-green-700/20",
	},
	{
		name: "SOLETEEE",
		description: "Creating memorable visual identities that resonate with your audience.",
		image: assets.Soleteee,
		tags: ["Identity", "Visual"],
		gradient: "from-yellow-500/20 to-yellow-700/20",
	},
	{
		name: "WE FOR SOCIETY",
		description: "Creating memorable visual identities that resonate with your audience.",
		image: assets.WeForSociety,
		tags: ["Identity", "Visual"],
		gradient: "from-green-500/20 to-green-700/20",
	},
];

// PropTypes for Project
const projectPropType = PropTypes.shape({
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	gradient: PropTypes.string.isRequired,
	offset: PropTypes.number,
	originalIndex: PropTypes.number,
});

// Card Component with PropTypes
const ProjectCard = ({ project, isCurrent, isAnimating, onCardClick }) => {
	const offset = project.offset;

	return (
		<motion.div
			layout
			initial={{
				x: offset * 250,
				scale: 1 - Math.abs(offset) * 0.15,
				opacity: 0,
			}}
			animate={{
				x: offset * 250,
				scale: 1 - Math.abs(offset) * 0.15,
				opacity: Math.abs(offset) <= 1 ? 1 : 0.3,
				zIndex: 10 - Math.abs(offset),
				filter: `blur(${Math.abs(offset) * 2}px)`,
			}}
			exit={{
				opacity: 0,
				scale: 0.8,
				transition: { duration: 0.3 },
			}}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 30,
				mass: 1,
			}}
			className="absolute"
			onClick={onCardClick}
		>
			<motion.div
				className={cn(
					"relative w-[240px] md:w-[360px] h-[380px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer",
					isCurrent && "ring-4 ring-white ring-opacity-50",
				)}
				whileHover={isCurrent ? { scale: 1.05, y: -10, transition: { duration: 0.3 } } : {}}
				whileTap={isCurrent ? { scale: 0.98 } : {}}
			>
				{/* Background Image */}
				<div className="absolute inset-0">
					<motion.img
						src={project.image}
						alt={project.name}
						className="w-full h-full object-cover"
						loading="lazy"
						initial={{ scale: 1.1 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.6 }}
					/>
					<div
						className={cn(
							"absolute inset-0 bg-gradient-to-b",
							project.gradient,
							"backdrop-blur-[1px]",
						)}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
				</div>

				{/* Content */}
				<div className="absolute inset-0 p-6 flex flex-col justify-end">
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
						<h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 leading-tight">{project.name}</h2>
						<p className="text-white/90 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-3">{project.description}</p>
						<div className="flex gap-2 mb-3 flex-wrap">
							{project.tags.map((tag, i) => (
								<motion.span
									key={i}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.3 + i * 0.1 }}
									className="px-2 md:px-3 py-1 md:py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/30"
								>
									{tag}
								</motion.span>
							))}
						</div>
					</motion.div>
				</div>

				{/* Hover Overlay for current card */}
				{isCurrent && (
					<motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black/20">
						<div className="absolute bottom-8 right-8">
							<motion.button whileHover={{ scale: 1.15, rotate: 90 }} whileTap={{ scale: 0.9 }} className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg" aria-label="View project details">
								<ChevronRight className="w-6 h-6 text-gray-900" />
							</motion.button>
						</div>
					</motion.div>
				)}
			</motion.div>
		</motion.div>
	);
};

ProjectCard.propTypes = {
	project: projectPropType.isRequired,
	isCurrent: PropTypes.bool.isRequired,
	isAnimating: PropTypes.bool.isRequired,
	onCardClick: PropTypes.func.isRequired,
};

const Home1 = ({ initialIndex = 0 }) => {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const paginate = useCallback((newDirection) => {
		if (isAnimating) return;

		setIsAnimating(true);
		setCurrentIndex((prevIndex) => {
			let newIndex = prevIndex + newDirection;
			if (newIndex < 0) newIndex = projects.length - 1;
			if (newIndex >= projects.length) newIndex = 0;
			return newIndex;
		});

		setTimeout(() => setIsAnimating(false), 600);
	}, [isAnimating]);

	// Auto-slide effect: move left every 3s, pause when hovered or animating
	useEffect(() => {
		if (isHovered || isAnimating) return undefined;
		const id = setInterval(() => paginate(1), 3000);
		return () => clearInterval(id);
	}, [isHovered, isAnimating, paginate]);

	const getVisibleProjects = () => {
		const visible = [];
		for (let i = -2; i <= 2; i++) {
			let index = currentIndex + i;
			if (index < 0) index = projects.length + index;
			if (index >= projects.length) index = index - projects.length;
			visible.push({ ...projects[index], offset: i, originalIndex: index });
		}
		return visible;
	};

	const handleCardClick = (offset) => {
		if (!isAnimating && offset !== 0) {
			paginate(offset > 0 ? 1 : -1);
		}
	};

	return (
		<div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-8 overflow-hidden mt-100">
			{/* Header */}
			<motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center mb-20 max-w-3xl z-10">
				<h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
					Our <span className="font-bold">Works</span>
				</h1>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-gray-600 text-sm md:text-base leading-relaxed">
					Witness the beauty of creativity through our lens, as we showcase stunning projects that evoke wonder and appreciation for innovation.
				</motion.p>
			</motion.div>

			{/* Navigation Buttons */}
			<motion.button onClick={() => paginate(-1)} disabled={isAnimating} whileHover={{ scale: 1.1, x: -5 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="absolute left-4 md:left-20 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Previous project">
				<ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-700 group-hover:text-gray-900 transition-colors" />
			</motion.button>

			<motion.button onClick={() => paginate(1)} disabled={isAnimating} whileHover={{ scale: 1.1, x: 5 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="absolute right-4 md:right-20 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Next project">
				<ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-700 group-hover:text-gray-900 transition-colors" />
			</motion.button>

			{/* Cards Container */}
			<div className="relative w-full max-w-7xl h-[350px] md:h-[400px] flex items-center justify-center mb-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				<AnimatePresence mode="popLayout">
					{getVisibleProjects().map((project) => {
						const offset = project.offset;
						const isCurrent = offset === 0;
						const isVisible = Math.abs(offset) <= 2;

						if (!isVisible) return null;

						return (
							<ProjectCard key={`${project.originalIndex}-${currentIndex}`} project={project} isCurrent={isCurrent} isAnimating={isAnimating} onCardClick={() => handleCardClick(offset)} />
						);
					})}
				</AnimatePresence>
			</div>

			{/* Progress Indicators */}
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-3 z-10">
				{projects.map((_, index) => (
					<motion.button key={index} onClick={() => {
						if (!isAnimating && index !== currentIndex) {
							setIsAnimating(true);
							setCurrentIndex(index);
							setTimeout(() => setIsAnimating(false), 600);
						}
					}} disabled={isAnimating} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} animate={{ width: index === currentIndex ? 48 : 8, backgroundColor: index === currentIndex ? '#111827' : '#d1d5db' }} transition={{ duration: 0.3 }} className={cn("h-2 rounded-full hover:bg-gray-400", isAnimating && "cursor-not-allowed")} aria-label={`Go to project ${index + 1}`} />
				))}
			</motion.div>
		</div>
	);
};

Home1.propTypes = {
	initialIndex: PropTypes.number,
};

Home1.defaultProps = {
	initialIndex: 0,
};

export default Home1;