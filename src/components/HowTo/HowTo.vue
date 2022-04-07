<template>
	<h2>How To Use</h2>
	<div class="card buffer">
		<div>
			<h4>Step 1: Course Information</h4>
			<p>
				On this screen you can enter all the information that your Golfers will
				need to know about their upcoming round. All this information is
				optional though, however for the scheduler to work you will need to
				enter a Start Time and Interval so that the Tee Times can be properly
				generated. A 2nd Start time is also available if you have some Golfers
				who require a later Tee Time due to other engagements such as Work.
			</p>
		</div>
		<div>
			<h4>Step 2: Golfer Names</h4>
			<p>
				Next, you will need to enter all the names of the Golfers that will be
				playing. Enter in their name, whether they need a later Tee Time (if
				available) and if they car pool with anyone. The Car Pool names will
				need to match the names of the other Golfer exactly and must be entered
				for all parties (ie if Tim Doe and John Doe car pool, then they will
				both need to list the other at this screen). Separate multiple car pool
				names by a comma. Once the information is complete, click "Add" and see
				their name populate to the list below. If there is a mistake, just click
				the "x" to remove them from the list.
			</p>
			<p>
				Once all names have been added, click "Generate Tee Time Schedule" to
				see the schedule!
			</p>
		</div>
		<div>
			<h4>Step 3: Schedule</h4>
			<p>
				Now you can see your completed Schedule. If you don't like it, you can
				click "Generate Again" to randomly create a new Schedule.
			</p>
			<p>
				If you are happy with the results, click "Print Schedule" and from there
				you will be able to print it, or save it as a PDF (print to pdf) for
				emailing and later use!
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'HowTo',
});
</script>

<style>
.buffer {
	padding: 20px;
}
</style>
