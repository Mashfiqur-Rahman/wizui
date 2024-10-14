import React, { useRef } from 'react';
import { ScrollView, View, StyleSheet, ViewStyle, Dimensions } from 'react-native';

interface CarouselProps {
    children: React.ReactNode[];
    style?: ViewStyle;
    autoScroll?: boolean;  // Optionally enable auto-scrolling
    scrollInterval?: number;  // Interval for auto-scroll (in ms)
}

const { width } = Dimensions.get('window');

const Carousel: React.FC<CarouselProps> = ({
                                               children,
                                               style,
                                               autoScroll = false,
                                               scrollInterval = 3000,
                                           }) => {
    const scrollRef = useRef<ScrollView>(null);
    const totalItems = children.length;
    let currentIndex = 0;

    const scrollToNextItem = () => {
        if (scrollRef.current) {
            currentIndex = (currentIndex + 1) % totalItems;  // Increment index, loop back to 0 if at the end
            scrollRef.current.scrollTo({ x: currentIndex * width, animated: true });
        }
    };

    // Auto-scroll effect
    React.useEffect(() => {
        if (autoScroll) {
            const interval = setInterval(scrollToNextItem, scrollInterval);
            return () => clearInterval(interval);  // Clear interval on unmount
        }
    }, [autoScroll]);

    return (
        <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={[styles.carousel, style]}
            onMomentumScrollEnd={(event) => {
                const contentOffsetX = event.nativeEvent.contentOffset.x;
                currentIndex = Math.round(contentOffsetX / width);  // Update index based on manual scroll
            }}
        >
            {children.map((child, index) => (
                <View key={index} style={styles.carouselItem}>
                    {child}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
    },
    carouselItem: {
        width: width,  // Make the item width equal to the screen width for proper paging
        height: 200,  // Adjust height as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Carousel;
